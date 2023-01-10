import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated } from 'typeorm'

@Entity()
export class User {
  // id自增长
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column({ type: 'varchar', length: 255, default: 'xxx' })
  name: string

  @Column({ type: 'text' })
  desc: string

  @Column({ type: 'timestamp' })
  createTime: string

  // @Column({ type: 'varchar', length: 255, select: true })
  // password: string

  // @Column({ type: 'int' })
  // age: number



  // @Column({
  //   type: "varchar",
  //   name: "ipaaa", //数据库表中的列名
  //   nullable: true, //在数据库中使列NULL或NOT NULL。 默认情况下，列是nullable：false
  //   comment: "注释", //添加注释
  //   select: true,  //定义在进行查询时是否默认隐藏此列。 设置为false时，列数据不会显示标准查询。 默认情况下，列是select：true
  //   default: "xxxx", //加数据库级列的DEFAULT值
  //   primary: false, //将列标记为主要列。 使用方式和@ PrimaryColumn相同。
  //   update: true, //指示"save"操作是否更新列值。如果为false，则只能在第一次插入对象时编写该值。 默认值为"true"
  //   collation: "", //定义列排序规则。
  // })
  // ip: string
}
