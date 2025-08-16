/*
  Warnings:

  - You are about to drop the `BookingStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MembershipType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NotificationType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SpaceType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `idx_asrama_city` ON `Asrama`;

-- DropIndex
DROP INDEX `idx_asrama_province` ON `Asrama`;

-- DropIndex
DROP INDEX `idx_booking_check_in` ON `Booking`;

-- DropIndex
DROP INDEX `idx_booking_check_out` ON `Booking`;

-- DropIndex
DROP INDEX `idx_booking_status` ON `Booking`;

-- DropIndex
DROP INDEX `idx_review_rating` ON `Review`;

-- DropIndex
DROP INDEX `idx_space_rating` ON `Space`;

-- DropIndex
DROP INDEX `idx_space_type` ON `Space`;

-- DropIndex
DROP INDEX `idx_user_email` ON `User`;

-- DropIndex
DROP INDEX `idx_user_membership_type` ON `User`;

-- AlterTable
ALTER TABLE `Admin` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Asrama` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Booking` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Space` MODIFY `type` ENUM('KAMAR', 'RUANG_RAPAT', 'AULA', 'MANASIK') NOT NULL,
    ALTER COLUMN `updated_at` DROP DEFAULT;

-- DropTable
DROP TABLE `BookingStatus`;

-- DropTable
DROP TABLE `MembershipType`;

-- DropTable
DROP TABLE `NotificationType`;

-- DropTable
DROP TABLE `PaymentType`;

-- DropTable
DROP TABLE `SpaceType`;

-- CreateTable
CREATE TABLE `SpacePricing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `spaceId` INTEGER NOT NULL,
    `durationType` ENUM('PER_DAY', 'PER_8H', 'PER_12H', 'PER_PERSON') NOT NULL,
    `category` ENUM('DEWASA', 'ANAK', 'GENERAL') NOT NULL DEFAULT 'GENERAL',
    `price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SpacePricing` ADD CONSTRAINT `SpacePricing_spaceId_fkey` FOREIGN KEY (`spaceId`) REFERENCES `Space`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
