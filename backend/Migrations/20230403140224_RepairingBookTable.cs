using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class RepairingBookTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(8910),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(5540));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(8060),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(4720));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 741, DateTimeKind.Utc).AddTicks(120),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(6080));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(9490),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(5390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(8620),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(4740));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(7820),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3940));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(6970),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3120));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(6290),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(2430));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(5640),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1720));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(4930),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1020));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(2670),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8960));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(2190),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8470));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(4180),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(320));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(3450),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(9590));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6780),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3740));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6650),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3610));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6500),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3380));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6320),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3210));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6090),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3040));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5920),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2860));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5800),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2670));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5670),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2540));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5440),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2390));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5280),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2160));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(1190),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(7780));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(60),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5160),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2040));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5030),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1910));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(4690),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1640));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(3400),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(350));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(5540),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(8910));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "users",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(4720),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(8060));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(6080),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 741, DateTimeKind.Utc).AddTicks(120));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_tokens",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(5390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(9490));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(4740),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(8620));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3940),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(7820));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(3120),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(6970));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_logins",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(2430),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(6290));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1720),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(5640));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "user_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(1020),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(4930));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8960),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(2670));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "roles",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(8470),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(2190));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 924, DateTimeKind.Utc).AddTicks(320),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(4180));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "role_claims",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(9590),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(3450));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3740),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6780));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "publishers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3610),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6650));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3380),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6500));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "loans",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3210),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6320));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(3040),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(6090));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "copies",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2860),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5920));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2670),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5800));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "categories",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2540),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5670));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2390),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5440));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "books",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2160),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5280));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(7780),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(1190));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "book_category",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(6580),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 740, DateTimeKind.Utc).AddTicks(60));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(2040),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5160));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "authors",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1910),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(5030));

            migrationBuilder.AlterColumn<DateTime>(
                name: "updated_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(1640),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(4690));

            migrationBuilder.AlterColumn<DateTime>(
                name: "created_at",
                table: "author_book",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 4, 1, 11, 18, 26, 923, DateTimeKind.Utc).AddTicks(350),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldDefaultValue: new DateTime(2023, 4, 3, 14, 2, 24, 739, DateTimeKind.Utc).AddTicks(3400));
        }
    }
}
