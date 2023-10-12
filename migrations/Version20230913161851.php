<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230913161851 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE journal_bulletin_lg (id INT AUTO_INCREMENT NOT NULL, bulletin_id INT DEFAULT NULL, rubrique_id INT DEFAULT NULL, montant DOUBLE PRECISION DEFAULT NULL, code_comptable VARCHAR(255) DEFAULT NULL, qte INT DEFAULT NULL, INDEX IDX_2F93A3AED1AAB236 (bulletin_id), INDEX IDX_2F93A3AE3BD38833 (rubrique_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE journal_bulletin_lg ADD CONSTRAINT FK_2F93A3AED1AAB236 FOREIGN KEY (bulletin_id) REFERENCES tbulletin (id)');
        $this->addSql('ALTER TABLE journal_bulletin_lg ADD CONSTRAINT FK_2F93A3AE3BD38833 FOREIGN KEY (rubrique_id) REFERENCES prubrique (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE journal_bulletin_lg DROP FOREIGN KEY FK_2F93A3AED1AAB236');
        $this->addSql('ALTER TABLE journal_bulletin_lg DROP FOREIGN KEY FK_2F93A3AE3BD38833');
        $this->addSql('DROP TABLE journal_bulletin_lg');
    }
}
