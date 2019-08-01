import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.posts)
    user: User;

    @Column('text')
    img: string;

    // todo: 缺少tag列，到时候再添加

    @Column()
    shareCount: number;

    @Column()
    commentCount: number;

    @Column()
    likeCount: number;

    @Column()
    collectCount: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
