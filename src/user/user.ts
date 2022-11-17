import { Table, Column, Model, Unique } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: false,
  underscored: true,
})
export class User extends Model {
  @ApiProperty({ example: 1 })
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'Mitar' })
  @Column
  firstname: string;

  @ApiProperty({ example: 'Marinkovic' })
  @Column
  lastname: string;

  @ApiProperty({ example: 'mitar.marinkovic@gmail.com' })
  @Unique
  @Column
  email: string;

  @ApiProperty({ example: new Date() })
  @Column
  createdAt: Date;

  @ApiProperty({ example: new Date() })
  @Column
  updatedAt: Date;
}
