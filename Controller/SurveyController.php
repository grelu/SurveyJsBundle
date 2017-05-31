<?php

namespace Grelu\SurveyJsBundle\Controller;

use Grelu\SurveyJsBundle\Entity\Survey;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Survey controller.
 *
 * @Route("survey")
 */
class SurveyController extends Controller
{
    /**
     * Lists all survey entities.
     *
     * @Route("/", name="survey_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $surveys = $em->getRepository('SurveyJsBundle:Survey')->findAll();

        return $this->render('SurveyJsBundle:survey:index.html.twig', array(
            'surveys' => $surveys,
        ));
    }

    /**
     * Creates a new survey entity.
     *
     * @Route("/edit/{id}", name="survey_new_edit")
     * @Method({"GET", "POST"})
     */
    public function newEditAction($id = NULL)
    {
        $em = $this->getDoctrine()->getManager();
        if(is_null($id)){
            $id = 0;
            $json = NULL;
        }else{
            $survey = $em->getRepository('SurveyJsBundle:Survey')->find($id);
            $id = $survey->getId();
            $json = $survey->getJson();
        }
        return $this->render('SurveyJsBundle:survey:new_edit.html.twig', array(
            'id' => $id,
            'json' => $json
        ));
    }

    /**
     * Show a survey entity.
     *
     * @Route("/show/{id}", name="survey_new_edit")
     * @Method({"GET", "POST"})
     */
    public function newEditAction(Survey $survey)
    {        
        return $this->render('SurveyJsBundle:survey:show.html.twig', array(
            'json' => $survey->getJson()
        ));
    }

    /**
     * Save a survey entity.
     *
     * @Route("/save", name="survey_save", options={"expose"=true})
     * @Method("POST")
     */
    public function saveAction(Request $request)
    {             
        $em=$this->getDoctrine()->getManager();
        //var_dump($request->get('id'));die;
        if($request->get('id') === '0'){
            $survey = new Survey();
        }else{
            $survey = $em->getRepository('SurveyJsBundle:Survey')->find($request->get('id'));      
        }
        $surveyAsObject = json_decode($request->get('jsonSurvey'));
        if(property_exists($surveyAsObject, 'title')){
            $survey->setTitle($surveyAsObject->title);
        }else{
            $survey->setTitle(time());
        }
        $survey->setJson(preg_replace("#\n|\t|\r#","",$request->get('jsonSurvey')));
        $em->persist($survey);
        $em->flush();
        return new Response(json_encode(array('STATUS' => 'ok')));
    }
}
