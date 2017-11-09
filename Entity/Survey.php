<?php

namespace Grelu\SurveyJsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass
 */

Class Survey
{

    /** @ORM\Id @GeneratedValue @Column(type="integer", name="id") */
    protected $id;

    /** @ORM\Column(name="title", nullable=true, unique=false, length=255) */

    protected $title;

    /** @ORM\Column(name="json", nullable=true, type="text") */

    protected $json;

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Survey
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set json
     *
     * @param string $json
     *
     * @return Survey
     */
    public function setJson($json)
    {
        $this->json = $json;

        return $this;
    }

    /**
     * Get json
     *
     * @return string
     */
    public function getJson()
    {
        return $this->json;
    }
}