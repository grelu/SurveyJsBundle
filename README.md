# SurveyJsBundle

SurveyJsBundle is just an integration of surveyjs library in Symfony 3.

How to
------

- Install this bundle :
composer require grelu/surveyjs-bundle

## Enable the bundle

To start using the bundle, register the bundle in your application's kernel class:

```php
// app/AppKernel.php
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = [
            // ...
            new Grelu\SurveyJsBundle\SurveyJsBundle(),
            // ...
        ];
    }
}
```

## Enable routing

```yaml
# app/config/routing.yml
surveyJs:
    resource: "@SurveyJsBundle/Controller/"
    type:     annotation
```

## Install assets

```bash
php bin/console assets:install
```

## Update schema :

```bash
php bin/console doctrine:schema:update --force
```

## Install Assets :

```bash
php bin/console assets:install
```
## You must now to extend two class in your AppBundle :


### Class Survey (to save your surveys ) :

```php
<?php

namespace AppBundle\Entity;

use Grelu\SurveyJsBundle\Entity\Survey as BaseSurvey;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="survey")
 */
class Survey extends BaseSurvey
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
}
```

### Class DataSurvey (to save results of surveys)

```php
<?php

namespace AppBundle\Entity;

use Grelu\SurveyJsBundle\Entity\DataSurvey as BaseDataSurvey;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="data_survey")
 */
class DataSurvey extends BaseDataSurvey
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
}
```

## It's Ok ! This is the list of routes available :

survey_index                        GET        ANY      ANY    /survey/                                       
survey_new_edit                     GET|POST   ANY      ANY    /survey/edit/{id}                              
survey_save                         POST       ANY      ANY    /survey/save                                   
survey_show                         GET        ANY      ANY    /survey/show/{id}/number/{number}              
survey_data_save                    POST       ANY      ANY    /survey/data-save               

Enjoy!