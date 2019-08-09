import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Tag } from './tag.entity';

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

    @Column()
    tagId: number;

    @ManyToOne(type => Tag, tag => tag.posts, { nullable: true })
    @JoinColumn({ name: 'tagId' })
    tag: Tag;

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
