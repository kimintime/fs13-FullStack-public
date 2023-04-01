using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class ModifiedModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_roles_users_user_id",
                table: "roles");

            migrationBuilder.DropTable(
                name: "book_publisher");

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
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(5540),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(1430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(4720),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(470));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(6080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(4030));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(5390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(3390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(4740),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(2440));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3940),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(1720));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3120),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(1020));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(2430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(320));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1720),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(9660));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1020),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(9080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8960),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(7020));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8470),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(6280));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(320),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(8420));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(9590),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(7770));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3740),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9560));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3610),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9440));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3380),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9300));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3210),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9140));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3040),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8930));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2860),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8780));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2670),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8660));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2540),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8530));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8300));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2160),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8190));

            migrationBuilder.AddColumn<int>(
                name: "publisher_id",
                table: "books",
                type: "integer",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(7780),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(3480));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(6580),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(2430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2040),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1910),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(7960));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1640),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(7650));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(350),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(6540));

            migrationBuilder.CreateIndex(
                name: "ix_books_publisher_id",
                table: "books",
                column: "publisher_id");

            migrationBuilder.AddForeignKey(
                name: "fk_books_publishers_publisher_id",
                table: "books",
                column: "publisher_id",
                principalTable: "publishers",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_books_publishers_publisher_id",
                table: "books");

            migrationBuilder.DropIndex(
                name: "ix_books_publisher_id",
                table: "books");

            migrationBuilder.DropColumn(
                name: "publisher_id",
                table: "books");

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(1430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(5540));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(470),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(4720));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(4030),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(6080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(3390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(5390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(2440),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(4740));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(1720),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3940));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(1020),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3120));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(320),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(2430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(9660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1720));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(9080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1020));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(7020),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8960));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(6280),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8470));

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
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(8420),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(320));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(7770),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(9590));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9560),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3740));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9440),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3610));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9300),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3380));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9140),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3210));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8930),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3040));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8780),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2860));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2670));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8530),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2540));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8300),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8190),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2160));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(3480),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(7780));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(2430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2040));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(7960),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1910));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(7650),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1640));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(6540),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(350));

            migrationBuilder.CreateTable(
                name: "book_publisher",
                columns: table => new
                {
                    books_id = table.Column<int>(type: "integer", nullable: false),
                    publishers_id = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(4460)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(5500))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_book_publisher", x => new { x.books_id, x.publishers_id });
                    table.ForeignKey(
                        name: "fk_book_publisher_books_books_id",
                        column: x => x.books_id,
                        principalTable: "books",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_book_publisher_publishers_publishers_id",
                        column: x => x.publishers_id,
                        principalTable: "publishers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "ix_roles_user_id",
                table: "roles",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "ix_book_publisher_publishers_id",
                table: "book_publisher",
                column: "publishers_id");

            migrationBuilder.AddForeignKey(
                name: "fk_roles_users_user_id",
                table: "roles",
                column: "user_id",
                principalTable: "users",
                principalColumn: "id");
        }
    }
}
