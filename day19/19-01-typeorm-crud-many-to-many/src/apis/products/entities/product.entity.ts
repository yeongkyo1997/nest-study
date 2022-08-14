import { Field, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid') // uuid는 중복되지 않는 아이디 값
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column({ unsigned: true })
  @Field(() => Number)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => ProductCategory)
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinColumn() // 기준이 되는 테이블의 컬럼에 써준다!!!!, 기준이 없기 때문에!!!!
  @OneToOne(() => ProductSaleslocation)
  @Field(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @JoinTable() // 기준이 되는 테이블
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  productTags: ProductTag[];

  // @OneToMany()
}
