import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @ManyToOne(type => User, user => user.posts, { nullable: false })
    @JoinColumn({ name: 'userId' })
    user!: User;

    @Column('text')
    img: string;

    @Column('text')
    content: string;
    // todo: 缺少tag列，到时候再添加

    @Column({ default: 0 })
    shareCount: number;

    @Column({ default: 0 })
    commentCount: number;

    @Column({ default: 0 })
    likeCount: number;

    @Column({ default: 0 })
    collectCount: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
