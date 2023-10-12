<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230829135551 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_operation_dossier (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, operation_id INT DEFAULT NULL, dossier_id INT DEFAULT NULL, INDEX IDX_6696DBD1A76ED395 (user_id), INDEX IDX_6696DBD144AC3583 (operation_id), INDEX IDX_6696DBD1611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_operation_dossier ADD CONSTRAINT FK_6696DBD1A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE user_operation_dossier ADD CONSTRAINT FK_6696DBD144AC3583 FOREIGN KEY (operation_id) REFERENCES us_operation (id)');
        $this->addSql('ALTER TABLE user_operation_dossier ADD CONSTRAINT FK_6696DBD1611C0C56 FOREIGN KEY (dossier_id) REFERENCES pdossier (id)');
        $this->addSql('ALTER TABLE pdossier_users DROP FOREIGN KEY FK_E9A333AE1733873F');
        $this->addSql('ALTER TABLE pdossier_users DROP FOREIGN KEY FK_E9A333AE67B3B43D');
        $this->addSql('ALTER TABLE users_pdossier DROP FOREIGN KEY FK_12175A6A67B3B43D');
        $this->addSql('ALTER TABLE users_pdossier DROP FOREIGN KEY FK_12175A6A1733873F');
        $this->addSql('ALTER TABLE us_operation_users DROP FOREIGN KEY FK_7F6375CA67B3B43D');
        $this->addSql('ALTER TABLE us_operation_users DROP FOREIGN KEY FK_7F6375CA6585E0F6');
        $this->addSql('DROP TABLE pdossier_users');
        $this->addSql('DROP TABLE users_pdossier');
        $this->addSql('DROP TABLE us_operation_users');
        $this->addSql('ALTER TABLE pmotif ADD code VARCHAR(255) DEFAULT NULL, ADD id_element VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pdossier_users (pdossier_id INT NOT NULL, users_id INT NOT NULL, INDEX IDX_E9A333AE1733873F (pdossier_id), INDEX IDX_E9A333AE67B3B43D (users_id), PRIMARY KEY(pdossier_id, users_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE users_pdossier (users_id INT NOT NULL, pdossier_id INT NOT NULL, INDEX IDX_12175A6A1733873F (pdossier_id), INDEX IDX_12175A6A67B3B43D (users_id), PRIMARY KEY(users_id, pdossier_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE us_operation_users (us_operation_id INT NOT NULL, users_id INT NOT NULL, INDEX IDX_7F6375CA67B3B43D (users_id), INDEX IDX_7F6375CA6585E0F6 (us_operation_id), PRIMARY KEY(us_operation_id, users_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE pdossier_users ADD CONSTRAINT FK_E9A333AE1733873F FOREIGN KEY (pdossier_id) REFERENCES pdossier (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE pdossier_users ADD CONSTRAINT FK_E9A333AE67B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE users_pdossier ADD CONSTRAINT FK_12175A6A67B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE users_pdossier ADD CONSTRAINT FK_12175A6A1733873F FOREIGN KEY (pdossier_id) REFERENCES pdossier (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE us_operation_users ADD CONSTRAINT FK_7F6375CA67B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE us_operation_users ADD CONSTRAINT FK_7F6375CA6585E0F6 FOREIGN KEY (us_operation_id) REFERENCES us_operation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_operation_dossier DROP FOREIGN KEY FK_6696DBD1A76ED395');
        $this->addSql('ALTER TABLE user_operation_dossier DROP FOREIGN KEY FK_6696DBD144AC3583');
        $this->addSql('ALTER TABLE user_operation_dossier DROP FOREIGN KEY FK_6696DBD1611C0C56');
        $this->addSql('DROP TABLE user_operation_dossier');
        $this->addSql('ALTER TABLE pmotif DROP code, DROP id_element');
    }
}
