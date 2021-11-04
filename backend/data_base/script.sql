CREATE TYPE enum_user_type AS ENUM ('organization','person');
CREATE TYPE enum_vaccinated_state AS ENUM('vaccinated','not_vaccinated','not_know');
CREATE TYPE enum_size_type AS ENUM('large','medium','small');


CREATE SEQUENCE id_user_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE id_animal_type_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE id_publication_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE id_interest_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE id_file_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


DROP TABLE IF EXISTS "interest" ;
DROP TABLE IF EXISTS "publication";
DROP TABLE IF EXISTS "animal_type";
DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "file";


CREATE TABLE "user"(
	id INTEGER DEFAULT nextval('id_user_seq'::regclass) NOT NULL,
	full_name VARCHAR(150) NOT NULL,
	last_name VARCHAR(150) NOT NULL,
	address VARCHAR(100) NULL,
	user_type enum_user_type NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
    mobile_phone VARCHAR(11) NOT NULL,
	register_date timestamp DEFAULT NOW() NOT NULL
);

CREATE TABLE "animal_type"(
	id integer DEFAULT nextval('id_animal_type_seq'::regclass) NOT NULL,
	animal_name varchar(50) NOT NULL,
    description text NULL,
    register_date timestamp DEFAULT now() NOT NULL
);

CREATE TABLE "file"(
    id integer DEFAULT nextval('id_file_seq'::regclass) NOT NULL,
    name_file varchar(255) NOT NULL,
    url_file text NOT NULL
);

CREATE TABLE "publication"(
    id integer DEFAULT nextval('id_publication_seq'::regclass) NOT NULL,
    id_user integer NOT NULL,
    id_animal_type integer NOT NULL,
    id_file integer NOT NULL,
    race varchar(50) NULL,
    age smallint NULL,
    vaccinated_state enum_vaccinated_state NOT NULL,
    extra_description text NULL,
    size_type enum_size_type NOT NULL,
    register_date timestamp DEFAULT now() NOT NULL,
    update_date timestamp NOT NULL
);


CREATE TABLE "interest"(
   id integer DEFAULT nextval('id_interest_seq'::regclass) NOT NULL,
   id_user integer NOT NULL,
   id_publication integer NOT NULL,
   register_date timestamp DEFAULT now() NOT NULL,
   bool_actual boolean NOT NULL
);



ALTER TABLE "user" 
	ADD CONSTRAINT id_user_pk PRIMARY KEY(id);

ALTER TABLE "animal_type"
    ADD CONSTRAINT id_animal_type_pk PRIMARY KEY(id);

ALTER TABLE "file" 
	ADD CONSTRAINT id_file_pk PRIMARY KEY(id);

ALTER TABLE "publication"
    ADD CONSTRAINT id_publication_pk PRIMARY KEY(id);

ALTER TABLE "publication"
    ADD CONSTRAINT id_user_publication_fk FOREIGN KEY(id_user) 
        REFERENCES "user"(id);

ALTER TABLE "publication"
    ADD CONSTRAINT id_animal_type_publication_fk FOREIGN KEY(id_animal_type) 
        REFERENCES "animal_type"(id);

ALTER TABLE "publication"
    ADD CONSTRAINT id_file_fk FOREIGN KEY(id_file) 
        REFERENCES "file"(id);

ALTER TABLE "interest"
    ADD CONSTRAINT id_interest_pk PRIMARY KEY(id);

ALTER TABLE "interest"
    ADD CONSTRAINT id_user_interest_fk FOREIGN KEY(id_user)
        REFERENCES "user"(id);

ALTER TABLE "interest"
    ADD CONSTRAINT id_publication_interest_fk FOREIGN KEY(id_publication)
        REFERENCES "publication"(id);

