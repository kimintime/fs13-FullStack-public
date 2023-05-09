--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Homebrew)
-- Dumped by pg_dump version 14.7 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: __EFMigrationsHistory; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public."__EFMigrationsHistory" (
    migration_id character varying(150) NOT NULL,
    product_version character varying(32) NOT NULL
);


ALTER TABLE public."__EFMigrationsHistory" OWNER TO apollostowel;

--
-- Name: author_book; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.author_book (
    authors_id integer NOT NULL,
    books_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.94761'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947807'::timestamp without time zone NOT NULL
);


ALTER TABLE public.author_book OWNER TO apollostowel;

--
-- Name: authors; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.authors (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947838'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947853'::timestamp without time zone NOT NULL
);


ALTER TABLE public.authors OWNER TO apollostowel;

--
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.authors ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.authors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: book_category; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.book_category (
    books_id integer NOT NULL,
    categories_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948387'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948505'::timestamp without time zone NOT NULL
);


ALTER TABLE public.book_category OWNER TO apollostowel;

--
-- Name: books; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(250) NOT NULL,
    description character varying(500),
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947883'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947901'::timestamp without time zone NOT NULL
);


ALTER TABLE public.books OWNER TO apollostowel;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.books ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.books_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: categories; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(10) NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947916'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947929'::timestamp without time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO apollostowel;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.categories ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: copies; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.copies (
    id integer NOT NULL,
    is_available boolean NOT NULL,
    publisher_id integer NOT NULL,
    book_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947952'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.94797'::timestamp without time zone NOT NULL
);


ALTER TABLE public.copies OWNER TO apollostowel;

--
-- Name: copies_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.copies ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.copies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: loans; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.loans (
    id integer NOT NULL,
    returned boolean NOT NULL,
    user_id integer NOT NULL,
    copy_id integer NOT NULL,
    date_loaned timestamp without time zone NOT NULL,
    date_due timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.947986'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948004'::timestamp without time zone NOT NULL
);


ALTER TABLE public.loans OWNER TO apollostowel;

--
-- Name: loans_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.loans ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.loans_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: publishers; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.publishers (
    id integer NOT NULL,
    publisher_name character varying(25) NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948032'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948045'::timestamp without time zone NOT NULL
);


ALTER TABLE public.publishers OWNER TO apollostowel;

--
-- Name: publishers_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.publishers ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.publishers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: role_claims; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.role_claims (
    id integer NOT NULL,
    role_id integer NOT NULL,
    claim_type text,
    claim_value text,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948733'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948799'::timestamp without time zone NOT NULL
);


ALTER TABLE public.role_claims OWNER TO apollostowel;

--
-- Name: role_claims_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.role_claims ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.role_claims_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: roles; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(256),
    normalized_name character varying(256),
    concurrency_stamp text,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948598'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948655'::timestamp without time zone NOT NULL
);


ALTER TABLE public.roles OWNER TO apollostowel;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.roles ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_claims; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.user_claims (
    id integer NOT NULL,
    user_id integer NOT NULL,
    claim_type text,
    claim_value text,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948882'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948953'::timestamp without time zone NOT NULL
);


ALTER TABLE public.user_claims OWNER TO apollostowel;

--
-- Name: user_claims_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.user_claims ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.user_claims_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_logins; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.user_logins (
    login_provider text NOT NULL,
    provider_key text NOT NULL,
    provider_display_name text,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.949026'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.949102'::timestamp without time zone NOT NULL
);


ALTER TABLE public.user_logins OWNER TO apollostowel;

--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.user_roles (
    user_id integer NOT NULL,
    role_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.949182'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.949261'::timestamp without time zone NOT NULL
);


ALTER TABLE public.user_roles OWNER TO apollostowel;

--
-- Name: user_tokens; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.user_tokens (
    user_id integer NOT NULL,
    login_provider text NOT NULL,
    name text NOT NULL,
    value text,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.949355'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.94942'::timestamp without time zone NOT NULL
);


ALTER TABLE public.user_tokens OWNER TO apollostowel;

--
-- Name: users; Type: TABLE; Schema: public; Owner: apollostowel
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948191'::timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT '2023-05-08 06:19:27.948276'::timestamp without time zone NOT NULL,
    user_name character varying(256),
    normalized_user_name character varying(256),
    email character varying(256),
    normalized_email character varying(256),
    email_confirmed boolean NOT NULL,
    password_hash text,
    security_stamp text,
    concurrency_stamp text,
    phone_number text,
    phone_number_confirmed boolean NOT NULL,
    two_factor_enabled boolean NOT NULL,
    lockout_end timestamp with time zone,
    lockout_enabled boolean NOT NULL,
    access_failed_count integer NOT NULL
);


ALTER TABLE public.users OWNER TO apollostowel;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: apollostowel
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: __EFMigrationsHistory; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public."__EFMigrationsHistory" (migration_id, product_version) FROM stdin;
20230323122803_UpdateUser	7.0.3
20230326133159_Initial_migration	7.0.3
20230331040146_UpdatedModels	7.0.3
20230401111827_ModifiedModels	7.0.3
20230403140224_RepairingBookTable	7.0.3
20230508061928_RemovePublisherIdFromBooks	7.0.3
\.


--
-- Data for Name: author_book; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.author_book (authors_id, books_id, created_at, updated_at) FROM stdin;
2	1	2023-04-01 11:18:26.923035	2023-04-01 11:18:26.923164
3	3	2023-04-01 11:18:26.923035	2023-04-01 11:18:26.923164
5	5	2023-04-03 14:02:24.73934	2023-04-03 14:02:24.739469
\.


--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.authors (id, first_name, last_name, created_at, updated_at) FROM stdin;
2	Walter	Farley	2023-04-01 14:59:04.083577	2023-04-01 17:57:32.866285
3	Anna	Sewell	2023-04-03 10:12:27.187595	2023-04-01 11:18:26.923204
4	Gail Carson	Levine	2023-04-03 10:13:26.438142	2023-04-03 10:15:13.255024
5	Charlotte	Brontë	2023-04-03 16:23:05.42307	2023-04-03 13:20:42.617222
6	Colleen	McCullough	2023-05-08 08:41:33.830267	2023-04-03 14:02:24.739516
\.


--
-- Data for Name: book_category; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.book_category (books_id, categories_id, created_at, updated_at) FROM stdin;
1	4	2023-04-01 11:18:26.923658	2023-04-01 11:18:26.923778
1	3	2023-04-01 11:18:26.923658	2023-04-01 11:18:26.923778
1	1	2023-04-01 11:18:26.923658	2023-04-01 11:18:26.923778
3	1	2023-04-01 11:18:26.923658	2023-04-01 11:18:26.923778
3	3	2023-04-01 11:18:26.923658	2023-04-01 11:18:26.923778
3	4	2023-04-01 11:18:26.923658	2023-04-01 11:18:26.923778
5	5	2023-04-03 14:02:24.740006	2023-04-03 14:02:24.740119
5	3	2023-04-03 14:02:24.740006	2023-04-03 14:02:24.740119
5	4	2023-04-03 14:02:24.740006	2023-04-03 14:02:24.740119
5	6	2023-04-03 14:02:24.740006	2023-04-03 14:02:24.740119
\.


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.books (id, title, description, created_at, updated_at) FROM stdin;
1	The Black Stallion	Published originally in 1941, this book is about a young boy, Alec Ramsay who finds a wild black stallion at a small Arabian port on the Red Sea. Between the black stallion and young boy, a strange understanding grew that you lead them through untold dangers as they journeyed to America. Nor could Alec understand that his adventures with the black stallion would capture the interest of an entire nation.	2023-04-01 20:05:22.670419	2023-04-01 20:14:47.60185
3	Black Beauty	As a young horse, Black Beauty is well-loved and happy. But when his owner is forced to sell him, his life changes drastically. He has many new owners, some of them cruel and some of them kind. All he needs is someone to love him again...Whether pulling an elegant carriage or a ramshackle cab, Black Beauty tries to live as best he can. This is his amazing story, told as only he could tell it.	2023-04-03 10:17:13.756554	2023-04-03 10:18:45.711723
5	Jane Eyre	Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. Hard. But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?	2023-04-03 16:31:27.462294	2023-04-03 16:32:31.778591
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.categories (id, name, description, created_at, updated_at) FROM stdin;
1	children	Books suitable for children of all ages	2023-04-01 17:58:35.190386	2023-04-01 17:59:19.607187
4	classics	Books that are timeless and of literary acclaim	2023-04-01 18:01:54.278961	2023-04-01 11:18:26.923267
3	fiction	Original works not based on real events.	2023-04-01 18:01:14.519765	2023-04-01 18:03:20.170892
5	romance	Fiction centered around a theme of love.	2023-04-03 17:08:12.326795	2023-04-03 14:02:24.73958
6	gothic	Fiction that includes characteristics of the uncanny or supernatural, often including romantic themes.	2023-04-03 17:09:48.894603	2023-04-03 14:02:24.73958
8	historical	Historical fiction presents a story set in the past, often during a significant time period.	2023-05-08 08:46:00.014042	2023-04-03 14:02:24.73958
\.


--
-- Data for Name: copies; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.copies (id, is_available, publisher_id, book_id, created_at, updated_at) FROM stdin;
1	t	1	1	2023-04-01 20:15:29.430006	2023-05-08 08:34:31.408385
4	t	3	5	2023-04-03 16:54:01.362706	2023-05-08 08:35:32.137111
2	t	2	3	2023-04-03 10:24:34.684256	2023-05-08 08:36:38.56267
3	t	3	3	2023-04-03 10:27:31.331048	2023-05-08 08:38:12.496854
\.


--
-- Data for Name: loans; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.loans (id, returned, user_id, copy_id, date_loaned, date_due, created_at, updated_at) FROM stdin;
4	t	1	1	2023-04-03 10:37:20.629811	2023-04-03 07:39:57.159	2023-04-03 10:37:20.630321	2023-04-03 10:40:14.926703
3	t	2	2	2023-04-03 10:33:51.474249	2023-05-05 11:14:13.474	2023-04-03 10:33:51.54279	2023-05-05 14:14:56.507654
5	t	1	1	2023-04-18 14:16:23.887681	2023-05-18 14:16:23.887789	2023-04-18 14:16:24.066055	2023-05-05 14:17:47.957255
6	t	4	3	2023-05-05 14:03:23.572677	2023-05-05 11:24:03.938	2023-05-05 14:03:23.702295	2023-05-05 14:24:56.376082
7	t	4	4	2023-05-05 14:10:01.699003	2023-05-07 21:31:21.61	2023-05-05 14:10:01.703656	2023-05-08 00:32:22.926645
8	t	4	2	2023-05-07 14:39:09.904591	2023-05-07 21:31:21.61	2023-05-07 14:39:10.00992	2023-05-08 00:33:35.699481
9	t	4	3	2023-05-07 14:53:37.3936	2023-05-07 21:31:21.61	2023-05-07 14:53:37.40103	2023-05-08 00:34:23.74163
10	t	4	1	2023-05-07 15:47:57.373827	2023-05-08 05:34:17.203	2023-05-07 15:47:57.380388	2023-05-08 08:34:31.40836
11	t	1	4	2023-05-08 08:15:22.813476	2023-05-08 05:34:17.203	2023-05-08 08:15:22.978017	2023-05-08 08:35:32.137106
12	t	1	2	2023-05-08 08:26:00.97767	2023-05-08 05:34:17.203	2023-05-08 08:26:00.988519	2023-05-08 08:36:38.562666
13	t	7	3	2023-05-08 08:29:06.535384	2023-05-08 05:34:17.203	2023-05-08 08:29:06.5367	2023-05-08 08:38:12.49685
\.


--
-- Data for Name: publishers; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.publishers (id, publisher_name, created_at, updated_at) FROM stdin;
1	Random House	2023-04-01 20:03:59.661255	2023-04-01 11:18:26.923374
2	Scholastic Paperbacks	2023-04-03 10:23:41.284427	2023-04-01 11:18:26.923374
3	Penguin Classics	2023-04-03 10:27:06.561038	2023-04-01 11:18:26.923374
4	Avon Books	2023-05-08 08:47:28.4124	2023-04-03 14:02:24.739678
5	Harper & Row	2023-05-08 08:48:39.364259	2023-04-03 14:02:24.739678
6	William Morrow	2023-05-08 08:49:52.452674	2023-04-03 14:02:24.739678
\.


--
-- Data for Name: role_claims; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.role_claims (id, role_id, claim_type, claim_value, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.roles (id, name, normalized_name, concurrency_stamp, created_at, updated_at) FROM stdin;
1	Admin	ADMIN	\N	2023-03-26 13:31:58.959431	2023-03-26 13:31:58.959598
2	Customer	CUSTOMER	\N	2023-03-26 13:31:58.959431	2023-03-26 13:31:58.959598
\.


--
-- Data for Name: user_claims; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.user_claims (id, user_id, claim_type, claim_value, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: user_logins; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.user_logins (login_provider, provider_key, provider_display_name, user_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.user_roles (user_id, role_id, created_at, updated_at) FROM stdin;
1	1	2023-03-26 13:31:58.960243	2023-03-26 13:31:58.960369
2	2	2023-03-26 13:31:58.960243	2023-03-26 13:31:58.960369
3	2	2023-03-26 13:31:58.960243	2023-03-26 13:31:58.960369
4	2	2023-04-03 14:02:24.740782	2023-04-03 14:02:24.740862
5	2	2023-04-03 14:02:24.740782	2023-04-03 14:02:24.740862
6	2	2023-04-03 14:02:24.740782	2023-04-03 14:02:24.740862
7	2	2023-04-03 14:02:24.740782	2023-04-03 14:02:24.740862
\.


--
-- Data for Name: user_tokens; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.user_tokens (user_id, login_provider, name, value, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: apollostowel
--

COPY public.users (id, first_name, last_name, created_at, updated_at, user_name, normalized_user_name, email, normalized_email, email_confirmed, password_hash, security_stamp, concurrency_stamp, phone_number, phone_number_confirmed, two_factor_enabled, lockout_end, lockout_enabled, access_failed_count) FROM stdin;
2	Basil	Disco	2023-03-26 13:31:58.959193	2023-03-26 13:31:58.959319	TheDoctor	THEDOCTOR	doctor@tardis.co.uk	DOCTOR@TARDIS.CO.UK	f	AQAAAAIAAYagAAAAEL+a9NusUqdRbTV4shv19xo9XnUMlP3G8ZS+8YdbAQFtMqsyXFLhV0bXwLDk2e1CJg==	FMFGZEFVV2OWSMMVGY7PRHAWMCLE7P7W	39db1f80-1fd0-4f42-b1f9-bf9dbb21aabe	\N	f	f	\N	t	0
3	Kate	Stewart	2023-03-26 13:31:58.959193	2023-03-26 13:31:58.959319	TheBrig	THEBRIG	k.stewart@unit.co.uk	K.STEWART@UNIT.CO.UK	f	AQAAAAIAAYagAAAAEEScSsBh902kr/3yRnbEvjt4wQaHUukF9SaL4xTF1Lg/meLACbVv4Xa5R1Ko8ZP1vA==	YRIBCINLAF4PMDVHPSJXMOZZPX7LFDBF	97dfe26e-fed8-44fa-be23-b1740184e6cd	\N	f	f	\N	t	0
1	Kimberly	Ruohio	2023-03-26 13:31:58.959193	2023-03-26 13:31:58.959319	KimInTime	KIMINTIME	admin@mail.com	ADMIN@MAIL.COM	f	AQAAAAIAAYagAAAAEGgAoTYf8wp8TH8C5T2TnBlGdbXgDLYCF74nEh6pGvm0PZD4DLyVqxJhuOIqQ0TqBw==	BWH6DKDUCA65Z4S4DC24FTYZRX64KKF3	d23c220b-52e5-4e6b-beaf-4e652c1bf346	\N	f	f	\N	t	0
5	Clara	Oswald	2023-04-03 14:02:24.739806	2023-04-03 14:02:24.739891	OswinFTW	OSWINFTW	clara@tardis.co.uk	CLARA@TARDIS.CO.UK	f	AQAAAAIAAYagAAAAEKiTIKjsga3aDoFr4NHcdFHTDVC1/MNHMdsEBHxIIr+JV7VQcslDfY+sD0YFqNRa2w==	KO7SIKRKAOO5WPNEN3M5DGWZQKQF3552	9d059668-be9b-4638-a1bc-3292c51e54fb	\N	f	f	\N	t	0
4	Petronella	Osgood	2023-04-03 14:02:24.739806	2023-04-03 14:02:24.739891	ZygonOsgood	ZYGONOSGOOD	osgood@unit.co.uk	OSGOOD@UNIT.CO.UK	f	AQAAAAIAAYagAAAAEKCIB6yg44wgaGPDUJ6JUP8W9AYINswbEVcbDcTVsHLAGEsOH8HcxBgVyWgaL9MFXQ==	VVBSD4WZDNCBZVNJQ27XA66V3YNGNBKL	9e71e6fd-0645-4bed-99ff-b9855fed2292	\N	f	f	\N	t	0
7	John	Doe	2023-04-03 14:02:24.739806	2023-04-03 14:02:24.739891	JohnDoe	JOHNDOE	john@mail.com	JOHN@MAIL.COM	f	AQAAAAIAAYagAAAAEDRf9dRCyvwqYKMBdrhlJduxKeMSMfGgTwFwqXYCmFxqzzTOx2HwCB8YtsRUUMDxgQ==	QET6G62AW3PJ2AV2COHONFMQU7O2V33A	73b40776-ce70-46bb-9fa1-30ff4d88b36b	\N	f	f	\N	t	0
6	Jane	Doe	2023-04-03 14:02:24.739806	2023-04-03 14:02:24.739891	TheJaneDoe	THEJANEDOE	jane@mail.com	JANE@MAIL.COM	f	AQAAAAIAAYagAAAAEL6xe9IEpjjg5Y/tFfeJtAF1yPwNQpBEXgPxS0ZJ8RnlWcOknwSaidJR1hjCvT+i6g==	PWTZAZDDX67CURFOEDIXIDBE2KIZEJA2	6c9323d6-5c69-437d-94d4-08487e0d34ac	\N	f	f	\N	t	0
\.


--
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.authors_id_seq', 6, true);


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.books_id_seq', 7, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.categories_id_seq', 8, true);


--
-- Name: copies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.copies_id_seq', 4, true);


--
-- Name: loans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.loans_id_seq', 13, true);


--
-- Name: publishers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.publishers_id_seq', 6, true);


--
-- Name: role_claims_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.role_claims_id_seq', 1, false);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.roles_id_seq', 2, true);


--
-- Name: user_claims_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.user_claims_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apollostowel
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: __EFMigrationsHistory pk___ef_migrations_history; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT pk___ef_migrations_history PRIMARY KEY (migration_id);


--
-- Name: author_book pk_author_book; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.author_book
    ADD CONSTRAINT pk_author_book PRIMARY KEY (authors_id, books_id);


--
-- Name: authors pk_authors; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT pk_authors PRIMARY KEY (id);


--
-- Name: book_category pk_book_category; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.book_category
    ADD CONSTRAINT pk_book_category PRIMARY KEY (books_id, categories_id);


--
-- Name: books pk_books; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT pk_books PRIMARY KEY (id);


--
-- Name: categories pk_categories; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT pk_categories PRIMARY KEY (id);


--
-- Name: copies pk_copies; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.copies
    ADD CONSTRAINT pk_copies PRIMARY KEY (id);


--
-- Name: loans pk_loans; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.loans
    ADD CONSTRAINT pk_loans PRIMARY KEY (id);


--
-- Name: publishers pk_publishers; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.publishers
    ADD CONSTRAINT pk_publishers PRIMARY KEY (id);


--
-- Name: role_claims pk_role_claims; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.role_claims
    ADD CONSTRAINT pk_role_claims PRIMARY KEY (id);


--
-- Name: roles pk_roles; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT pk_roles PRIMARY KEY (id);


--
-- Name: user_claims pk_user_claims; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_claims
    ADD CONSTRAINT pk_user_claims PRIMARY KEY (id);


--
-- Name: user_logins pk_user_logins; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_logins
    ADD CONSTRAINT pk_user_logins PRIMARY KEY (login_provider, provider_key);


--
-- Name: user_roles pk_user_roles; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT pk_user_roles PRIMARY KEY (user_id, role_id);


--
-- Name: user_tokens pk_user_tokens; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT pk_user_tokens PRIMARY KEY (user_id, login_provider, name);


--
-- Name: users pk_users; Type: CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_users PRIMARY KEY (id);


--
-- Name: EmailIndex; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX "EmailIndex" ON public.users USING btree (normalized_email);


--
-- Name: RoleNameIndex; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE UNIQUE INDEX "RoleNameIndex" ON public.roles USING btree (normalized_name);


--
-- Name: UserNameIndex; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE UNIQUE INDEX "UserNameIndex" ON public.users USING btree (normalized_user_name);


--
-- Name: ix_author_book_books_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_author_book_books_id ON public.author_book USING btree (books_id);


--
-- Name: ix_authors_first_name; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_authors_first_name ON public.authors USING btree (first_name);


--
-- Name: ix_authors_first_name_last_name; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE UNIQUE INDEX ix_authors_first_name_last_name ON public.authors USING btree (first_name, last_name);


--
-- Name: ix_authors_last_name; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_authors_last_name ON public.authors USING btree (last_name);


--
-- Name: ix_book_category_categories_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_book_category_categories_id ON public.book_category USING btree (categories_id);


--
-- Name: ix_books_title; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE UNIQUE INDEX ix_books_title ON public.books USING btree (title);


--
-- Name: ix_copies_book_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_copies_book_id ON public.copies USING btree (book_id);


--
-- Name: ix_copies_publisher_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_copies_publisher_id ON public.copies USING btree (publisher_id);


--
-- Name: ix_loans_copy_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_loans_copy_id ON public.loans USING btree (copy_id);


--
-- Name: ix_loans_user_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_loans_user_id ON public.loans USING btree (user_id);


--
-- Name: ix_publishers_publisher_name; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE UNIQUE INDEX ix_publishers_publisher_name ON public.publishers USING btree (publisher_name);


--
-- Name: ix_role_claims_role_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_role_claims_role_id ON public.role_claims USING btree (role_id);


--
-- Name: ix_user_claims_user_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_user_claims_user_id ON public.user_claims USING btree (user_id);


--
-- Name: ix_user_logins_user_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_user_logins_user_id ON public.user_logins USING btree (user_id);


--
-- Name: ix_user_roles_role_id; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_user_roles_role_id ON public.user_roles USING btree (role_id);


--
-- Name: ix_users_first_name; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_users_first_name ON public.users USING btree (first_name);


--
-- Name: ix_users_first_name_last_name; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE UNIQUE INDEX ix_users_first_name_last_name ON public.users USING btree (first_name, last_name);


--
-- Name: ix_users_last_name; Type: INDEX; Schema: public; Owner: apollostowel
--

CREATE INDEX ix_users_last_name ON public.users USING btree (last_name);


--
-- Name: author_book fk_author_book_authors_authors_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.author_book
    ADD CONSTRAINT fk_author_book_authors_authors_id FOREIGN KEY (authors_id) REFERENCES public.authors(id) ON DELETE CASCADE;


--
-- Name: author_book fk_author_book_books_books_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.author_book
    ADD CONSTRAINT fk_author_book_books_books_id FOREIGN KEY (books_id) REFERENCES public.books(id) ON DELETE CASCADE;


--
-- Name: book_category fk_book_category_books_books_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.book_category
    ADD CONSTRAINT fk_book_category_books_books_id FOREIGN KEY (books_id) REFERENCES public.books(id) ON DELETE CASCADE;


--
-- Name: book_category fk_book_category_categories_categories_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.book_category
    ADD CONSTRAINT fk_book_category_categories_categories_id FOREIGN KEY (categories_id) REFERENCES public.categories(id) ON DELETE CASCADE;


--
-- Name: copies fk_copies_books_book_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.copies
    ADD CONSTRAINT fk_copies_books_book_id FOREIGN KEY (book_id) REFERENCES public.books(id) ON DELETE CASCADE;


--
-- Name: copies fk_copies_publishers_publisher_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.copies
    ADD CONSTRAINT fk_copies_publishers_publisher_id FOREIGN KEY (publisher_id) REFERENCES public.publishers(id) ON DELETE CASCADE;


--
-- Name: loans fk_loans_copies_copy_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.loans
    ADD CONSTRAINT fk_loans_copies_copy_id FOREIGN KEY (copy_id) REFERENCES public.copies(id) ON DELETE SET NULL;


--
-- Name: loans fk_loans_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.loans
    ADD CONSTRAINT fk_loans_users_user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: role_claims fk_role_claims_roles_role_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.role_claims
    ADD CONSTRAINT fk_role_claims_roles_role_id FOREIGN KEY (role_id) REFERENCES public.roles(id) ON DELETE CASCADE;


--
-- Name: user_claims fk_user_claims_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_claims
    ADD CONSTRAINT fk_user_claims_users_user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: user_logins fk_user_logins_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_logins
    ADD CONSTRAINT fk_user_logins_users_user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: user_roles fk_user_roles_roles_role_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fk_user_roles_roles_role_id FOREIGN KEY (role_id) REFERENCES public.roles(id) ON DELETE CASCADE;


--
-- Name: user_roles fk_user_roles_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fk_user_roles_users_user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: user_tokens fk_user_tokens_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: apollostowel
--

ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT fk_user_tokens_users_user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--
