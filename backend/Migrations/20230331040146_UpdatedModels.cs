using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_authors_books_book_id",
                table: "authors");

            migrationBuilder.DropForeignKey(
                name: "fk_categories_books_book_id",
                table: "categories");

            migrationBuilder.DropForeignKey(
                name: "fk_publishers_books_book_id",
                table: "publishers");

            migrationBuilder.DropIndex(
                name: "ix_publishers_book_id",
                table: "publishers");

            migrationBuilder.DropIndex(
                name: "ix_categories_book_id",
                table: "categories");

            migrationBuilder.DropIndex(
                name: "ix_authors_book_id",
                table: "authors");

            migrationBuilder.DropColumn(
                name: "book_id",
                table: "publishers");

            migrationBuilder.DropColumn(
                name: "book_id",
                table: "categories");

            migrationBuilder.DropColumn(
                name: "book_id",
                table: "authors");

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(1430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(3190));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(470),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(1930));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(4030),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(5920));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(3390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(5010));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(2440),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(3690));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(1720),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(2430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(1020),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(1490));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(320),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(480));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(9660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(9630));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(9080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(8860));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(7020),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(5980));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(6280),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(4310));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(8420),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(7990));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(7770),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(7110));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9560),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(120));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9440),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9950));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9300),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9670));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9140),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9480));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8930),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9290));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8780),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9090));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8840));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8530),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8660));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8300),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8520));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8190),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8360));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(7960),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(7630));

            migrationBuilder.CreateTable(
                name: "author_book",
                columns: table => new
                {
                    authors_id = table.Column<int>(type: "integer", nullable: false),
                    books_id = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(6540)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(7650))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_author_book", x => new { x.authors_id, x.books_id });
                    table.ForeignKey(
                        name: "fk_author_book_authors_authors_id",
                        column: x => x.authors_id,
                        principalTable: "authors",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_author_book_books_books_id",
                        column: x => x.books_id,
                        principalTable: "books",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "book_category",
                columns: table => new
                {
                    books_id = table.Column<int>(type: "integer", nullable: false),
                    categories_id = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(2430)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(3480))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_book_category", x => new { x.books_id, x.categories_id });
                    table.ForeignKey(
                        name: "fk_book_category_books_books_id",
                        column: x => x.books_id,
                        principalTable: "books",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_book_category_categories_categories_id",
                        column: x => x.categories_id,
                        principalTable: "categories",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

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
                name: "ix_author_book_books_id",
                table: "author_book",
                column: "books_id");

            migrationBuilder.CreateIndex(
                name: "ix_book_category_categories_id",
                table: "book_category",
                column: "categories_id");

            migrationBuilder.CreateIndex(
                name: "ix_book_publisher_publishers_id",
                table: "book_publisher",
                column: "publishers_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "author_book");

            migrationBuilder.DropTable(
                name: "book_category");

            migrationBuilder.DropTable(
                name: "book_publisher");

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(3190),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(1430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(1930),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(470));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(5920),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(4030));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(5010),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(3390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(3690),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(2440));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(2430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(1720));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(1490),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(1020));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 960, DateTimeKind.Utc).AddTicks(480),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 896, DateTimeKind.Utc).AddTicks(320));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(9630),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(9660));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(8860),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(9080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(5980),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(7020));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(4310),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(6280));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(7990),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(8420));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(7110),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 895, DateTimeKind.Utc).AddTicks(7770));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 959, DateTimeKind.Utc).AddTicks(120),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9560));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9950),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9440));

            migrationBuilder.AddColumn<int>(
                name: "book_id",
                table: "publishers",
                type: "integer",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9670),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9300));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9480),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(9140));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9290),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8930));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(9090),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8780));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8840),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8660));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8660),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8530));

            migrationBuilder.AddColumn<int>(
                name: "book_id",
                table: "categories",
                type: "integer",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8520),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8300));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8360),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8190));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(8080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(8080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 3, 26, 13, 31, 58, 958, DateTimeKind.Utc).AddTicks(7630),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 3, 31, 4, 1, 45, 894, DateTimeKind.Utc).AddTicks(7960));

            migrationBuilder.AddColumn<int>(
                name: "book_id",
                table: "authors",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "ix_publishers_book_id",
                table: "publishers",
                column: "book_id");

            migrationBuilder.CreateIndex(
                name: "ix_categories_book_id",
                table: "categories",
                column: "book_id");

            migrationBuilder.CreateIndex(
                name: "ix_authors_book_id",
                table: "authors",
                column: "book_id");

            migrationBuilder.AddForeignKey(
                name: "fk_authors_books_book_id",
                table: "authors",
                column: "book_id",
                principalTable: "books",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "fk_categories_books_book_id",
                table: "categories",
                column: "book_id",
                principalTable: "books",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "fk_publishers_books_book_id",
                table: "publishers",
                column: "book_id",
                principalTable: "books",
                principalColumn: "id");
        }
    }
}
