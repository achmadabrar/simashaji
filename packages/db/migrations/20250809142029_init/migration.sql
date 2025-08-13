-- Create Enums as separate tables for MySQL compatibility
CREATE TABLE IF NOT EXISTS `SpaceType` (
  `value` VARCHAR(50) PRIMARY KEY
);

INSERT INTO `SpaceType` (`value`) VALUES ('KAMAR'), ('RUANG_RAPAT'), ('AULA');

CREATE TABLE IF NOT EXISTS `BookingStatus` (
  `value` VARCHAR(50) PRIMARY KEY  
);

INSERT INTO `BookingStatus` (`value`) VALUES ('PENDING'), ('CONFIRMED'), ('PAID'), ('CANCELLED'), ('COMPLETED');

CREATE TABLE IF NOT EXISTS `MembershipType` (
  `value` VARCHAR(50) PRIMARY KEY
);

INSERT INTO `MembershipType` (`value`) VALUES ('REGULAR'), ('PREMIUM'), ('VIP');

CREATE TABLE IF NOT EXISTS `PaymentType` (
  `value` VARCHAR(50) PRIMARY KEY
);

INSERT INTO `PaymentType` (`value`) VALUES ('CREDIT_CARD'), ('DEBIT_CARD'), ('VISA'), ('MASTERCARD'), ('BANK_TRANSFER');

CREATE TABLE IF NOT EXISTS `NotificationType` (
  `value` VARCHAR(50) PRIMARY KEY
);

INSERT INTO `NotificationType` (`value`) VALUES 
('BOOKING_CONFIRMATION'), ('BOOKING_REMINDER'), ('PAYMENT_SUCCESS'), 
('PAYMENT_FAILED'), ('PROMOTIONAL'), ('SYSTEM_UPDATE'), ('REVIEW_REQUEST');

-- Create Admin table
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create User table
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `birth_date` DATETIME(3) NULL,
    `address` TEXT NULL,
    `profile_image` VARCHAR(500) NULL,
    `membership_type` ENUM('REGULAR', 'PREMIUM', 'VIP') NOT NULL DEFAULT 'REGULAR',
    `points` INTEGER NOT NULL DEFAULT 0,
    `rating` DOUBLE NOT NULL DEFAULT 0.0,
    `total_bookings` INTEGER NOT NULL DEFAULT 0,
    `joined_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `last_active` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `password` VARCHAR(255) NULL,
    `google_id` VARCHAR(191) NULL,
    `is_email_verified` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_google_id_key`(`google_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create Asrama table
CREATE TABLE `Asrama` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `contact_no` VARCHAR(191) NOT NULL,
    `lat` DOUBLE NOT NULL,
    `lng` DOUBLE NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `description` TEXT NULL,
    `images` JSON NULL,
    `rating` DOUBLE NOT NULL DEFAULT 0.0,
    `total_reviews` INTEGER NOT NULL DEFAULT 0,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Asrama_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create Space table
CREATE TABLE `Space` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('KAMAR', 'RUANG_RAPAT', 'AULA') NOT NULL,
    `capacity` INTEGER NOT NULL,
    `price_per_day` DECIMAL(10, 2) NOT NULL,
    `images` JSON NOT NULL,
    `amenities` JSON NOT NULL,
    `asrama_id` INTEGER NOT NULL,
    `description` TEXT NULL,
    `size` DOUBLE NULL,
    `rating` DOUBLE NOT NULL DEFAULT 0.0,
    `total_reviews` INTEGER NOT NULL DEFAULT 0,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create PaymentMethod table
CREATE TABLE `PaymentMethod` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `type` ENUM('CREDIT_CARD', 'DEBIT_CARD', 'VISA', 'MASTERCARD', 'BANK_TRANSFER') NOT NULL,
    `card_number` VARCHAR(191) NOT NULL,
    `card_holder` VARCHAR(191) NOT NULL,
    `expiry_month` INTEGER NOT NULL,
    `expiry_year` INTEGER NOT NULL,
    `is_default` BOOLEAN NOT NULL DEFAULT false,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create Booking table
CREATE TABLE `Booking` (
    `id` VARCHAR(191) NOT NULL,
    `space_id` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `check_in` DATETIME(3) NOT NULL,
    `check_out` DATETIME(3) NOT NULL,
    `total_days` INTEGER NOT NULL,
    `total_price` DECIMAL(10, 2) NOT NULL,
    `status` ENUM('PENDING', 'CONFIRMED', 'PAID', 'CANCELLED', 'COMPLETED') NOT NULL DEFAULT 'PENDING',
    `snap_token` VARCHAR(191) NULL,
    `payment_method_id` VARCHAR(191) NULL,
    `paid_at` DATETIME(3) NULL,
    `guest_count` INTEGER NOT NULL DEFAULT 1,
    `special_requests` TEXT NULL,
    `notes` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create UserFavorite table
CREATE TABLE `UserFavorite` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `space_id` INTEGER NOT NULL,
    `added_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `UserFavorite_user_id_space_id_key`(`user_id`, `space_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create UserNotification table
CREATE TABLE `UserNotification` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `booking_reminders` BOOLEAN NOT NULL DEFAULT true,
    `promotional_offers` BOOLEAN NOT NULL DEFAULT true,
    `newsletter` BOOLEAN NOT NULL DEFAULT false,
    `upcoming_bookings` BOOLEAN NOT NULL DEFAULT true,
    `email_notifications` BOOLEAN NOT NULL DEFAULT true,
    `push_notifications` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `UserNotification_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create Review table
CREATE TABLE `Review` (
    `id` VARCHAR(191) NOT NULL,
    `booking_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `space_id` INTEGER NOT NULL,
    `rating` DOUBLE NOT NULL,
    `comment` TEXT NULL,
    `cleanliness` DOUBLE NULL,
    `location` DOUBLE NULL,
    `amenities` DOUBLE NULL,
    `service` DOUBLE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Review_booking_id_key`(`booking_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create Notification table
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `type` ENUM('BOOKING_CONFIRMATION', 'BOOKING_REMINDER', 'PAYMENT_SUCCESS', 'PAYMENT_FAILED', 'PROMOTIONAL', 'SYSTEM_UPDATE', 'REVIEW_REQUEST') NOT NULL,
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `data` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Notification_user_id_idx`(`user_id`),
    INDEX `Notification_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Add Foreign Key Constraints
ALTER TABLE `Asrama` ADD CONSTRAINT `Asrama_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Space` ADD CONSTRAINT `Space_asrama_id_fkey` FOREIGN KEY (`asrama_id`) REFERENCES `Asrama`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Booking` ADD CONSTRAINT `Booking_space_id_fkey` FOREIGN KEY (`space_id`) REFERENCES `Space`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Booking` ADD CONSTRAINT `Booking_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Booking` ADD CONSTRAINT `Booking_payment_method_id_fkey` FOREIGN KEY (`payment_method_id`) REFERENCES `PaymentMethod`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE `PaymentMethod` ADD CONSTRAINT `PaymentMethod_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `UserFavorite` ADD CONSTRAINT `UserFavorite_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `UserFavorite` ADD CONSTRAINT `UserFavorite_space_id_fkey` FOREIGN KEY (`space_id`) REFERENCES `Space`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `UserNotification` ADD CONSTRAINT `UserNotification_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Review` ADD CONSTRAINT `Review_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Review` ADD CONSTRAINT `Review_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Review` ADD CONSTRAINT `Review_space_id_fkey` FOREIGN KEY (`space_id`) REFERENCES `Space`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Create indexes for better performance
CREATE INDEX `idx_booking_user_id` ON `Booking`(`user_id`);
CREATE INDEX `idx_booking_space_id` ON `Booking`(`space_id`);
CREATE INDEX `idx_booking_status` ON `Booking`(`status`);
CREATE INDEX `idx_booking_check_in` ON `Booking`(`check_in`);
CREATE INDEX `idx_booking_check_out` ON `Booking`(`check_out`);

CREATE INDEX `idx_space_type` ON `Space`(`type`);
CREATE INDEX `idx_space_asrama_id` ON `Space`(`asrama_id`);
CREATE INDEX `idx_space_rating` ON `Space`(`rating`);

CREATE INDEX `idx_asrama_city` ON `Asrama`(`city`);
CREATE INDEX `idx_asrama_province` ON `Asrama`(`province`);

CREATE INDEX `idx_user_email` ON `User`(`email`);
CREATE INDEX `idx_user_membership_type` ON `User`(`membership_type`);

CREATE INDEX `idx_review_space_id` ON `Review`(`space_id`);
CREATE INDEX `idx_review_rating` ON `Review`(`rating`);