import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 300 })
  name!: string;
  @Column({ type: "varchar", length: 300 })
  username!: string;
}
