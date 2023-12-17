import { Column, Entity } from "typeorm";

@Entity("ideastrousers", { schema: "public" })
export class Ideastrousers {
  @Column("character varying", { name: "title", nullable: true, length: 100 })
  TITLE: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 1000 })
  IMAGE: string | null;

  @Column("character varying", { name: "price", nullable: true, length: 20 })
  PRICE: string | null;

  @Column("character varying", { name: "sku", nullable: true, length: 100 })
  SKU: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 1000,
  })
  DESCRIPTION: string | null;
}
