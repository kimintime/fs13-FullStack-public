using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddBooksToAuthor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_author_book_authors_authors_id",
                table: "author_book");

            migrationBuilder.DropForeignKey(
                name: "fk_author_book_books_books_id",
                table: "author_book");

            migrationBuilder.DropPrimaryKey(
                name: "pk_author_book",
                table: "author_book");

            migrationBuilder.RenameTable(
                name: "author_book",
                newName: "BookAuthor");

            migrationBuilder.RenameIndex(
                name: "ix_author_book_books_id",
                table: "BookAuthor",
                newName: "ix_book_author_books_id");

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(6970),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(5540));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(6260),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(4720));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(6100),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(6080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(5490),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(5390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(4910),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(4740));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(4240),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3940));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(3570),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3120));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(2980),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(2430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(2360),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1720));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(1740),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1020));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(9970),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8960));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(9530),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8470));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(1120),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(320));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(500),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(9590));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(5510),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3740));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(5390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3610));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(5200),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3380));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(5050),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3210));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4910),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3040));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2860));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4550),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2670));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4440),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2540));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4310),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4110),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2160));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(8940),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(7780));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(7880),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4000),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2040));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(3890),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1910));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "BookAuthor",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(3660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1640));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "BookAuthor",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(2430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(350));

            migrationBuilder.AddPrimaryKey(
                name: "pk_book_author",
                table: "BookAuthor",
                columns: new[] { "authors_id", "books_id" });

            migrationBuilder.AddForeignKey(
                name: "fk_book_author_authors_authors_id",
                table: "BookAuthor",
                column: "authors_id",
                principalTable: "authors",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_book_author_books_books_id",
                table: "BookAuthor",
                column: "books_id",
                principalTable: "books",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_book_author_authors_authors_id",
                table: "BookAuthor");

            migrationBuilder.DropForeignKey(
                name: "fk_book_author_books_books_id",
                table: "BookAuthor");

            migrationBuilder.DropPrimaryKey(
                name: "pk_book_author",
                table: "BookAuthor");

            migrationBuilder.RenameTable(
                name: "BookAuthor",
                newName: "author_book");

            migrationBuilder.RenameIndex(
                name: "ix_book_author_books_id",
                table: "author_book",
                newName: "ix_author_book_books_id");

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(5540),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(6970));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(4720),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(6260));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(6080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(6100));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(5390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(5490));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(4740),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(4910));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3940),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(4240));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3120),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(3570));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(2430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(2980));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1720),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(2360));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1020),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(1740));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8960),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(9970));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8470),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(9530));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(320),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(1120));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(9590),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 64, DateTimeKind.Utc).AddTicks(500));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3740),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(5510));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3610),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(5390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3380),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(5200));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3210),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(5050));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3040),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4910));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2860),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4660));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2670),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4550));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2540),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4440));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4310));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2160),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4110));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(7780),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(8940));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(6580),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(7880));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2040),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(4000));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1910),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(3890));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1640),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(3660));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(350),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 2, 15, 25, 55, 63, DateTimeKind.Utc).AddTicks(2430));

            migrationBuilder.AddPrimaryKey(
                name: "pk_author_book",
                table: "author_book",
                columns: new[] { "authors_id", "books_id" });

            migrationBuilder.AddForeignKey(
                name: "fk_author_book_authors_authors_id",
                table: "author_book",
                column: "authors_id",
                principalTable: "authors",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_author_book_books_books_id",
                table: "author_book",
                column: "books_id",
                principalTable: "books",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
