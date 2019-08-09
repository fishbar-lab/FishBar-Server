import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated, OneToMany } from 'typeorm';
import { Post } from './post.entity';
import { Tag } from './tag.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  haedImg: string;

  @Column({
    length: 11,
  })
  mobile: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(type => Post, post => post.user)
  posts: Post[];

  @OneToMany(type => Tag, tag => tag.user)
  tags: Tag[];
}
