DROP TABLE IF EXISTS sys.setting;
CREATE TABLE sys.setting (
    "key" VARCHAR(64) PRIMARY KEY,
    "value" VARCHAR(256)
);