-- AlterTable
ALTER TABLE `Admin` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Asrama` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Booking` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Floor` ADD COLUMN `name` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Space` ALTER COLUMN `updated_at` DROP DEFAULT;
