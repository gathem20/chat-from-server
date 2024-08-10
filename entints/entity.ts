import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 25 })
  name!: string;

  @Column({ type: "varchar", length: 25 })
  username!: string;
}
