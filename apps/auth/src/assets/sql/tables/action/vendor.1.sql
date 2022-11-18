DROP TABLE IF EXISTS "action".vendor;
CREATE TABLE "action".vendor (
    id BIGSERIAL PRIMARY KEY,
    vendor_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    "password" TEXT NOT NULL,
    created_at TIMESTAMPZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPZ NOT NULL DEFAULT NOW()
);