<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230802150156 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE tbulletin (id INT AUTO_INCREMENT NOT NULL, l_contract_id INT DEFAULT NULL, periode_id INT DEFAULT NULL, id_ets VARCHAR(50) NOT NULL, annee INT NOT NULL, INDEX IDX_519D05C9B23B14B (l_contract_id), INDEX IDX_519D05CF384C1CF (periode_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tbulletin_lg (id INT AUTO_INCREMENT NOT NULL, bulletin_id INT DEFAULT NULL, rubrique_id INT DEFAULT NULL, montant DOUBLE PRECISION NOT NULL, sens DOUBLE PRECISION DEFAULT NULL, INDEX IDX_2CADAC1D1AAB236 (bulletin_id), INDEX IDX_2CADAC13BD38833 (rubrique_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tbulletin ADD CONSTRAINT FK_519D05C9B23B14B FOREIGN KEY (l_contract_id) REFERENCES lcontract (id)');
        $this->addSql('ALTER TABLE tbulletin ADD CONSTRAINT FK_519D05CF384C1CF FOREIGN KEY (periode_id) REFERENCES periode (id)');
        $this->addSql('ALTER TABLE tbulletin_lg ADD CONSTRAINT FK_2CADAC1D1AAB236 FOREIGN KEY (bulletin_id) REFERENCES tbulletin (id)');
        $this->addSql('ALTER TABLE tbulletin_lg ADD CONSTRAINT FK_2CADAC13BD38833 FOREIGN KEY (rubrique_id) REFERENCES prubrique (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tbulletin DROP FOREIGN KEY FK_519D05C9B23B14B');
        $this->addSql('ALTER TABLE tbulletin DROP FOREIGN KEY FK_519D05CF384C1CF');
        $this->addSql('ALTER TABLE tbulletin_lg DROP FOREIGN KEY FK_2CADAC1D1AAB236');
        $this->addSql('ALTER TABLE tbulletin_lg DROP FOREIGN KEY FK_2CADAC13BD38833');
        $this->addSql('DROP TABLE tbulletin');
        $this->addSql('DROP TABLE tbulletin_lg');
    }
}
