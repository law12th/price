CREATE TRIGGER set_timestamp_customer_on_update BEFORE
UPDATE ON "action".customer FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_vendor_on_update BEFORE
UPDATE ON "action".vendor FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();