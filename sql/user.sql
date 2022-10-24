CREATE TABLE "public"."users" (
    "user_id" int4 NOT NULL ,
    "username" varchar(255) NOT NULL,
    "password" varchar(255) NOT NULL,
    "signupdate" timestamptz DEFAULT now(),
    PRIMARY KEY ("user_id")
);

CREATE TABLE "public"."chat" (
    "user_id" int4 NOT NULL ,
    "username" varchar(255) NOT NULL,
    "password" varchar(255) NOT NULL,
    "signupdate" timestamptz DEFAULT now(),
    PRIMARY KEY ("user_id")
);