using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class first : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "books",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
                    description = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(880)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(990))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_books", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "roles",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    normalized_name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    concurrency_stamp = table.Column<string>(type: "text", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(3660)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(4020))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_roles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    first_name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    last_name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(2660)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(3260)),
                    user_name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    normalized_user_name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    normalized_email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    email_confirmed = table.Column<bool>(type: "boolean", nullable: false),
                    password_hash = table.Column<string>(type: "text", nullable: true),
                    security_stamp = table.Column<string>(type: "text", nullable: true),
                    concurrency_stamp = table.Column<string>(type: "text", nullable: true),
                    phone_number = table.Column<string>(type: "text", nullable: true),
                    phone_number_confirmed = table.Column<bool>(type: "boolean", nullable: false),
                    two_factor_enabled = table.Column<bool>(type: "boolean", nullable: false),
                    lockout_end = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    lockout_enabled = table.Column<bool>(type: "boolean", nullable: false),
                    access_failed_count = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_users", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "authors",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    first_name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    last_name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    book_id = table.Column<int>(type: "integer", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(490)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(760))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_authors", x => x.id);
                    table.ForeignKey(
                        name: "fk_authors_books_book_id",
                        column: x => x.book_id,
                        principalTable: "books",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "categories",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: false),
                    description = table.Column<string>(type: "text", nullable: true),
                    book_id = table.Column<int>(type: "integer", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(1080)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(1210))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_categories", x => x.id);
                    table.ForeignKey(
                        name: "fk_categories_books_book_id",
                        column: x => x.book_id,
                        principalTable: "books",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "publishers",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    publisher_name = table.Column<string>(type: "character varying(25)", maxLength: 25, nullable: false),
                    book_id = table.Column<int>(type: "integer", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(1830)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(1940))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_publishers", x => x.id);
                    table.ForeignKey(
                        name: "fk_publishers_books_book_id",
                        column: x => x.book_id,
                        principalTable: "books",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "role_claims",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    role_id = table.Column<int>(type: "integer", nullable: false),
                    claim_type = table.Column<string>(type: "text", nullable: true),
                    claim_value = table.Column<string>(type: "text", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(4500)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(5030))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_role_claims", x => x.id);
                    table.ForeignKey(
                        name: "fk_role_claims_roles_role_id",
                        column: x => x.role_id,
                        principalTable: "roles",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_claims",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    claim_type = table.Column<string>(type: "text", nullable: true),
                    claim_value = table.Column<string>(type: "text", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(5550)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(6140))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_user_claims", x => x.id);
                    table.ForeignKey(
                        name: "fk_user_claims_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_logins",
                columns: table => new
                {
                    login_provider = table.Column<string>(type: "text", nullable: false),
                    provider_key = table.Column<string>(type: "text", nullable: false),
                    provider_display_name = table.Column<string>(type: "text", nullable: true),
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(6760)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(7270))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_user_logins", x => new { x.login_provider, x.provider_key });
                    table.ForeignKey(
                        name: "fk_user_logins_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_roles",
                columns: table => new
                {
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    role_id = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(7850)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(8440))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_user_roles", x => new { x.user_id, x.role_id });
                    table.ForeignKey(
                        name: "fk_user_roles_roles_role_id",
                        column: x => x.role_id,
                        principalTable: "roles",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_user_roles_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_tokens",
                columns: table => new
                {
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    login_provider = table.Column<string>(type: "text", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    value = table.Column<string>(type: "text", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(8970)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(9480))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_user_tokens", x => new { x.user_id, x.login_provider, x.name });
                    table.ForeignKey(
                        name: "fk_user_tokens_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "copies",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    is_available = table.Column<bool>(type: "boolean", nullable: false),
                    publisher_id = table.Column<int>(type: "integer", nullable: false),
                    book_id = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(1320)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(1450))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_copies", x => x.id);
                    table.ForeignKey(
                        name: "fk_copies_books_book_id",
                        column: x => x.book_id,
                        principalTable: "books",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_copies_publishers_publisher_id",
                        column: x => x.publisher_id,
                        principalTable: "publishers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "loans",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    returned = table.Column<bool>(type: "boolean", nullable: false),
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    copy_id = table.Column<int>(type: "integer", nullable: false),
                    date_loaned = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    date_due = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(1570)),
                    updated_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValue: new DateTime(2023, 3, 21, 22, 0, 8, 862, DateTimeKind.Utc).AddTicks(1710))
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_loans", x => x.id);
                    table.ForeignKey(
                        name: "fk_loans_copies_copy_id",
                        column: x => x.copy_id,
                        principalTable: "copies",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "fk_loans_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateIndex(
                name: "ix_authors_book_id",
                table: "authors",
                column: "book_id");

            migrationBuilder.CreateIndex(
                name: "ix_authors_first_name",
                table: "authors",
                column: "first_name");

            migrationBuilder.CreateIndex(
                name: "ix_authors_first_name_last_name",
                table: "authors",
                columns: new[] { "first_name", "last_name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_authors_last_name",
                table: "authors",
                column: "last_name");

            migrationBuilder.CreateIndex(
                name: "ix_books_title",
                table: "books",
                column: "title",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_categories_book_id",
                table: "categories",
                column: "book_id");

            migrationBuilder.CreateIndex(
                name: "ix_copies_book_id",
                table: "copies",
                column: "book_id");

            migrationBuilder.CreateIndex(
                name: "ix_copies_publisher_id",
                table: "copies",
                column: "publisher_id");

            migrationBuilder.CreateIndex(
                name: "ix_loans_copy_id",
                table: "loans",
                column: "copy_id");

            migrationBuilder.CreateIndex(
                name: "ix_loans_user_id",
                table: "loans",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "ix_publishers_book_id",
                table: "publishers",
                column: "book_id");

            migrationBuilder.CreateIndex(
                name: "ix_publishers_publisher_name",
                table: "publishers",
                column: "publisher_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_role_claims_role_id",
                table: "role_claims",
                column: "role_id");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "roles",
                column: "normalized_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_user_claims_user_id",
                table: "user_claims",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "ix_user_logins_user_id",
                table: "user_logins",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "ix_user_roles_role_id",
                table: "user_roles",
                column: "role_id");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "users",
                column: "normalized_email");

            migrationBuilder.CreateIndex(
                name: "ix_users_first_name",
                table: "users",
                column: "first_name");

            migrationBuilder.CreateIndex(
                name: "ix_users_first_name_last_name",
                table: "users",
                columns: new[] { "first_name", "last_name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_users_last_name",
                table: "users",
                column: "last_name");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "users",
                column: "normalized_user_name",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "authors");

            migrationBuilder.DropTable(
                name: "categories");

            migrationBuilder.DropTable(
                name: "loans");

            migrationBuilder.DropTable(
                name: "role_claims");

            migrationBuilder.DropTable(
                name: "user_claims");

            migrationBuilder.DropTable(
                name: "user_logins");

            migrationBuilder.DropTable(
                name: "user_roles");

            migrationBuilder.DropTable(
                name: "user_tokens");

            migrationBuilder.DropTable(
                name: "copies");

            migrationBuilder.DropTable(
                name: "roles");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "publishers");

            migrationBuilder.DropTable(
                name: "books");
        }
    }
}
