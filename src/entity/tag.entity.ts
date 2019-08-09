import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from './post.entity';
import { User } from './user.entity';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag: string;

    @Column()
    userId: number;

    @ManyToOne(type => User, user => user.posts, { nullable: false })
    @JoinColumn({ name: 'userId' })
    user!: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @OneToMany(type => Post, post => post.user)
    posts: Post[];
}
