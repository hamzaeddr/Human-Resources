<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230803160342 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pprelevement (id INT AUTO_INCREMENT NOT NULL, contract_id INT DEFAULT NULL, rubrique_id INT DEFAULT NULL, created DATETIME DEFAULT NULL, montant DOUBLE PRECISION DEFAULT NULL, montant_total DOUBLE PRECISION DEFAULT NULL, date_debut DATETIME DEFAULT NULL, nombre_mois DOUBLE PRECISION DEFAULT NULL, active TINYINT(1) DEFAULT NULL, valider TINYINT(1) DEFAULT NULL, INDEX IDX_BCD091682576E0FD (contract_id), INDEX IDX_BCD091683BD38833 (rubrique_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pprelevement_lg (id INT AUTO_INCREMENT NOT NULL, prelevement_id INT DEFAULT NULL, periode_id INT DEFAULT NULL, bulletin_id INT DEFAULT NULL, montant DOUBLE PRECISION DEFAULT NULL, valider TINYINT(1) DEFAULT NULL, active TINYINT(1) DEFAULT NULL, INDEX IDX_2A729364CE389617 (prelevement_id), INDEX IDX_2A729364F384C1CF (periode_id), INDEX IDX_2A729364D1AAB236 (bulletin_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pprelevement ADD CONSTRAINT FK_BCD091682576E0FD FOREIGN KEY (contract_id) REFERENCES lcontract (id)');
        $this->addSql('ALTER TABLE pprelevement ADD CONSTRAINT FK_BCD091683BD38833 FOREIGN KEY (rubrique_id) REFERENCES prubrique (id)');
        $this->addSql('ALTER TABLE pprelevement_lg ADD CONSTRAINT FK_2A729364CE389617 FOREIGN KEY (prelevement_id) REFERENCES pprelevement (id)');
        $this->addSql('ALTER TABLE pprelevement_lg ADD CONSTRAINT FK_2A729364F384C1CF FOREIGN KEY (periode_id) REFERENCES periode (id)');
        $this->addSql('ALTER TABLE pprelevement_lg ADD CONSTRAINT FK_2A729364D1AAB236 FOREIGN KEY (bulletin_id) REFERENCES tbulletin (id)');
        $this->addSql('ALTER TABLE lcontract DROP FOREIGN KEY FK_D0F3912E325980C0');
        $this->addSql('DROP INDEX IDX_D0F3912E325980C0 ON lcontract');
        $this->addSql('ALTER TABLE lcontract CHANGE employe_id_id employe_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lcontract ADD CONSTRAINT FK_D0F3912E1B65292 FOREIGN KEY (employe_id) REFERENCES pemploye (id)');
        $this->addSql('CREATE INDEX IDX_D0F3912E1B65292 ON lcontract (employe_id)');
        $this->addSql('ALTER TABLE tbulletin DROP FOREIGN KEY FK_519D05C9B23B14B');
        $this->addSql('DROP INDEX IDX_519D05C9B23B14B ON tbulletin');
        $this->addSql('ALTER TABLE tbulletin CHANGE l_contract_id contract_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tbulletin ADD CONSTRAINT FK_519D05C2576E0FD FOREIGN KEY (contract_id) REFERENCES lcontract (id)');
        $this->addSql('CREATE INDEX IDX_519D05C2576E0FD ON tbulletin (contract_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pprelevement DROP FOREIGN KEY FK_BCD091682576E0FD');
        $this->addSql('ALTER TABLE pprelevement DROP FOREIGN KEY FK_BCD091683BD38833');
        $this->addSql('ALTER TABLE pprelevement_lg DROP FOREIGN KEY FK_2A729364CE389617');
        $this->addSql('ALTER TABLE pprelevement_lg DROP FOREIGN KEY FK_2A729364F384C1CF');
        $this->addSql('ALTER TABLE pprelevement_lg DROP FOREIGN KEY FK_2A729364D1AAB236');
        $this->addSql('DROP TABLE pprelevement');
        $this->addSql('DROP TABLE pprelevement_lg');
        $this->addSql('ALTER TABLE lcontract DROP FOREIGN KEY FK_D0F3912E1B65292');
        $this->addSql('DROP INDEX IDX_D0F3912E1B65292 ON lcontract');
        $this->addSql('ALTER TABLE lcontract CHANGE employe_id employe_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lcontract ADD CONSTRAINT FK_D0F3912E325980C0 FOREIGN KEY (employe_id_id) REFERENCES pemploye (id)');
        $this->addSql('CREATE INDEX IDX_D0F3912E325980C0 ON lcontract (employe_id_id)');
        $this->addSql('ALTER TABLE tbulletin DROP FOREIGN KEY FK_519D05C2576E0FD');
        $this->addSql('DROP INDEX IDX_519D05C2576E0FD ON tbulletin');
        $this->addSql('ALTER TABLE tbulletin CHANGE contract_id l_contract_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tbulletin ADD CONSTRAINT FK_519D05C9B23B14B FOREIGN KEY (l_contract_id) REFERENCES lcontract (id)');
        $this->addSql('CREATE INDEX IDX_519D05C9B23B14B ON tbulletin (l_contract_id)');
    }
}
