import { Column, Entity, Index, PrimaryColumn } from "typeorm";

// @Index("cartdata_pkey", ["id"], { unique: true })
@Entity("cartdata", { schema: "public" })
export class Cartdata {
  @PrimaryColumn({ type: "bigint", name: "id" })
  ID: string;

  @Column("character varying", { name: "title", nullable: true, length: 100 })
  TITLE: string | null;

  @Column("character varying", { name: "price", nullable: true, length: 20 })
  PRICE: string | null;

  @Column("character varying", {
    name: "itemlink",
    nullable: true,
    length: 1000,
  })
  ITEMLINK: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 1000 })
  IMAGE: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 1000,
  })
  DESCRIPTION: string | null;

  @Column("character varying", { name: "skucode", nullable: true, length: 100 })
  SKUCODE: string | null;

  @Column("character varying", {
    name: "username",
    nullable: true,
    length: 100,
  })
  USERNAME: string | null;
}
