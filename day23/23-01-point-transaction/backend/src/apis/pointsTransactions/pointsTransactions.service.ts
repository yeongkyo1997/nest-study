import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create({ impUid, amount, user: _user }) {
    // 1. pointTransaction의 거래기록 1줄 생성
    const pointTransction = this.pointsTransactionsRepository.create({
      impUid,
      amount,
      user: _user,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    });
    await this.pointsTransactionsRepository.save(pointTransction);

    // 2. user의 point 찾기
    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });

    // 3. user의 point 업데이트
    this.usersRepository.update(
      { id: _user.id },
      { point: user.point + amount },
    );

    // 4. 최종결과 프론트엔드에 리턴
    return pointTransction;
  }
}
