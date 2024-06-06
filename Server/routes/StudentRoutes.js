const express = require('express');
const router = express.Router();

const OneControllers = require('../controlers/1-Controllers');
const TwoControllers = require('../controlers/2-controllers');
const ThreeControllers = require('../controlers/3-controllers');
const FourControllers = require('../controlers/4-controllers');
const FiveControllers = require('../controlers/5-controllers');
const LkgControllers = require('../controlers/Lkg-controllers');
const UkgControllers = require('../controlers/Ukg-controllers');


router.get("/lkg" , LkgControllers.getAllStudent); router.get("/lkg/:id" , LkgControllers.getByid);router.post("/lkg" , LkgControllers.addStudent); router.post("/lkg/:id" , LkgControllers.updateMarks);
router.put("/lkg/:id" , LkgControllers.updateStudent); router.delete("/lkg/:id", LkgControllers.deleteStudent);

router.get("/ukg" , UkgControllers.getAllStudent); router.get("/ukg/:id" , UkgControllers.getByid); router.post("/ukg" , UkgControllers.addStudent); router.post("/ukg/:id" , UkgControllers.updateMarks);
router.put("/ukg/:id" , UkgControllers.updateStudent); router.delete("/ukg/:id",UkgControllers.deleteStudent);

router.get("/one" , OneControllers.getAllStudent); router.get("/one/:id" , OneControllers.getByid); router.post("/one" , OneControllers.addStudent); router.post("/one/:id" , OneControllers.updateMarks);
router.put("/one/:id" , OneControllers.updateStudent); router.delete("/one/:id",OneControllers.deleteStudent);

router.get("/two" , TwoControllers.getAllStudent); router.get("/two/:id" , TwoControllers.getByid); router.post("/two" , TwoControllers.addStudent); router.post("/two/:id" , TwoControllers.updateMarks);
router.put("/two/:id" , TwoControllers.updateStudent); router.delete("/two/:id", TwoControllers.deleteStudent);

router.get("/three" , ThreeControllers.getAllStudent); router.get("/three/:id" , ThreeControllers.getByid); router.post("/three" , ThreeControllers.addStudent); router.post("/three/:id" , ThreeControllers.updateMarks);
router.put("/three/:id" , ThreeControllers.updateStudent); router.delete("/three/:id",ThreeControllers.deleteStudent);

router.get("/four" , FourControllers.getAllStudent); router.get("/four/:id" , FourControllers.getByid); router.post("/four" , FourControllers.addStudent); router.post("/four/:id" , FourControllers.updateMarks);
router.put("/four/:id" , FourControllers.updateStudent); router.delete("/four/:id", FourControllers.deleteStudent);

router.get("/five" , FiveControllers.getAllStudent); router.get("/five/:id" , FiveControllers.getByid); router.post("/five" , FiveControllers.addStudent); router.post("/five/:id" , FiveControllers.updateMarks);
router.put("/five/:id" , FiveControllers.updateStudent); router.delete("/five/:id", FiveControllers.deleteStudent);


module.exports = router;