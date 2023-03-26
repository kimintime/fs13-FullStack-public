using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class Initial_migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(3190),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(6020));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(1930),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(5270));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(5920),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(3500));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(5010),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(2810));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(3690),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(2030));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(2430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(1350));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(1490),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(680));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(480),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(90));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(9630),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(9460));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(8860),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(8830));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(5980),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(6940));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(4310),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(6530));

            migrationBuilder.AddColumn<int>(
                name: "user_id",
                table: "roles",
                type: "integer",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(7990),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(8200));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(7110),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(7560));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(120),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3830));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9950),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3600));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9670),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3420));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9480),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3260));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9290),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3090));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9090),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2920));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8840),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2750));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8520),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2310));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8360),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2170));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2000));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(7630),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(1660));

            migrationBuilder.CreateIndex(
                name: "ix_roles_user_id",
                table: "roles",
                column: "user_id");

            migrationBuilder.AddForeignKey(
                name: "fk_roles_users_user_id",
                table: "roles",
                column: "user_id",
                principalTable: "users",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_roles_users_user_id",
                table: "roles");

            migrationBuilder.DropIndex(
                name: "ix_roles_user_id",
                table: "roles");

            migrationBuilder.DropColumn(
                name: "user_id",
                table: "roles");

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(6020),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(3190));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(5270),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(1930));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(3500),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(5920));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(2810),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(5010));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(2030),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(3690));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(1350),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(2430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(680),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(1490));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 495, DateTimeKind.Utc).AddTicks(90),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(480));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(9460),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(9630));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(8830),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(8860));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(6940),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(5980));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(6530),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(4310));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(8200),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(7990));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(7560),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(7110));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3830),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(120));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3600),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9950));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3420),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9670));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3260),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9480));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(3090),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9290));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2920),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9090));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2750),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8840));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8660));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2310),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8520));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2170),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8360));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(2000),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 23, 12, 28, 3, 494, DateTimeKind.Utc).AddTicks(1660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(7630));
        }
    }
}
