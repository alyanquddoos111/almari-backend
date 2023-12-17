import { Column, Entity } from "typeorm";

@Entity("sanasafinaz", { schema: "public" })
export class Sanasafinaz {
  @Column("character varying", { name: "title", nullable: true, length: 100 })
  TITLE: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 1000 })
  IMAGE: string | null;

  @Column("character varying", { name: "skucode", nullable: true, length: 100 })
  SKUCODE: string | null;

  @Column("character varying", { name: "price", nullable: true, length: 20 })
  PRICE: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 1000,
  })
  DESCRIPTION: string | null;
}
