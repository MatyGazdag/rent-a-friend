-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    password text COLLATE pg_catalog."default" NOT NULL,
    email character varying(256) COLLATE pg_catalog."default" NOT NULL,
    username character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to admin;

    -- Table: public.booking

-- DROP TABLE IF EXISTS public.booking;

CREATE TABLE IF NOT EXISTS public.booking
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    booking daterange NOT NULL,
    "ownedBy" uuid,
    CONSTRAINT booking_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.booking
    OWNER to admin;