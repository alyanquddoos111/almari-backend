import { Column, Entity, Index, PrimaryColumn,OneToMany } from "typeorm";
import { Userlogin } from "./Userlogin";

// @Index("userinfo_pkey", ["id"], { unique: true })
@Entity("userinfo", { schema: "public" })
export class UserInfo {
  @PrimaryColumn("bigint", { name: "id" })
  ID: number;

  @Column("character varying", {
    name: "firstname",
    nullable: true,
    length: 30,
  })
  FIRSTNAME: string | null;

  @Column("character varying", { name: "lastname", nullable: true, length: 30 })
  LASTNAME: string | null;

  @Column("integer", { name: "age", nullable: true })
  AGE: number | null;

  @Column("character varying", { name: "city", nullable: true, length: 30 })
  CITY: string | null;

  @Column("character varying", { name: "gender", nullable: true, length: 20 })
  GENDER: string | null;

  @OneToMany(() => Userlogin, (userlogin) => userlogin.USERID)
  USERLOGIN: Userlogin[];
}
