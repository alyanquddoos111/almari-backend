import { Column, Entity, Index, PrimaryColumn,ManyToOne,JoinColumn } from "typeorm";
import { UserInfo } from "./Userinfo";

// @Index("userlogin_pkey", ["id"], { unique: true })
@Entity("userlogin", { schema: "public" })
export class Userlogin {
  @PrimaryColumn("bigint", { name: "id" })
  ID: number;

  @Column("character varying", { name: "email", nullable: true, length: 100 })
  EMAIL: string | null;

  @Column("character varying", { name: "password", nullable: true, length: 30 })
  PASSWORD: string | null;

  @ManyToOne(() => UserInfo, (userinfo) => userinfo.USERLOGIN)
  @JoinColumn([{ name: "userid", referencedColumnName: "ID" }])
  USERID: UserInfo;
}
