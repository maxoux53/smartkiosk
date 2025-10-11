BEGIN TRANSACTION;
    CREATE TABLE user (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name VARCHAR(20) NOT NULL,
        last_name VARCHAR(40) NOT NULL,
        email VARCHAR(80) UNIQUE NOT NULL,
        password BYTEA NOT NULL,
        avatar TEXT DEFAULT NULL
    );

    CREATE TABLE event (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        location VARCHAR(80) NOT NULL,
        is_active BOOLEAN DEFAULT TRUE,
        iban VARCHAR(35) NOT NULL
    );

    CREATE TABLE role (
        user_id INT REFERENCES user(id),
        event_id INT REFERENCES event(id),
        role VARCHAR(50) NOT NULL,

        CONSTRAINT pk_role PRIMARY KEY (user_id, event_id)
    );

    CREATE TABLE vat (
        type CHAR(1) PRIMARY KEY,
        rate SMALLINT NOT NULL,

        CONSTRAINT chk_rate CHECK (rate >= 0 AND rate <= 100)
    );

    CREATE TABLE category (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        label VARCHAR(50) NOT NULL,
        vat_type CHAR(1) REFERENCES vat(type)
    );

    CREATE TABLE product (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        label VARCHAR(80) NOT NULL,
        is_available BOOLEAN DEFAULT TRUE,
        excl_vat_price MONEY NOT NULL,
        is_removed BOOLEAN DEFAULT FALSE,
        category_id INT REFERENCES category(id),
        event_id INT REFERENCES event(id),

        CONSTRAINT chk_price CHECK (excl_vat_price >= 0::MONEY)
    );

    CREATE TABLE purchase (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        user_id INT REFERENCES user(id)
    );

    CREATE TABLE order_line (
        product_id INT REFERENCES product(id),
        purchase_id INT REFERENCES purchase(id),
        quantity SMALLINT NOT NULL,
        price MONEY NOT NULL,

        CONSTRAINT pk_order_line PRIMARY KEY (product_id, purchase_id),
        CONSTRAINT chk_price CHECK (price >= 0::MONEY),
        CONSTRAINT chk_quantity CHECK (quantity != 0)
    );
COMMIT;
