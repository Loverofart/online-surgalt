import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory} from 'react-router-dom'
import classnames from 'classnames'
import {addCourse, spinnerHelper} from '../../redux/actions/userAction'
import Navbar from '../../components/Navbar'
import { Button, Card, CardContent, CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field, FieldArray, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { object, number, string, boolean } from 'yup';
// import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    errorColor: {
        color: theme.palette.error.main,
    },
    stretch: {
      flexGrow: 1
    }
}));

const emptyVideo = { title: '', url: '' };

const UploadVideos = () => {
    const classes = useStyles();
    const history = useHistory()
    const store = useSelector(store=>store.courseRoot)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [videoFile, setVideoFile] = useState({})
    const [imageFile, setImageFile] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

    const categories = [
        { value: "web-development", label: "Web Development" },
        { value: "andriod-development", label: "Android Development" },
        { value: "ui/ux-design", label: "Ui/UX Design" },
        { value: "cooking", label: "Cooking" },
        { value: "graphic-design", label: "Graphic Design" },
    ]


    const fileHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            let video = e.target.files[0]
            setVideoFile(video)
        }
    }

    // const imageHandler = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //         let image = e.target.files[0]
    //         setImageFile(image)
    //     }
    // }



    const formHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("videoFile", videoFile)
      //  formData.append("imageFile", imageFile)
        formData.append("title", title)
        formData.append("price", price)
        formData.append("category", category)
        formData.append("description", description)
        dispatch(addCourse(formData,history))
        setIsLoading(true)
    }

    useEffect(() => {
        if (store.addCourseFlag) {
            setIsLoading(false)
            dispatch(spinnerHelper(false))
        }
    }, [store.addCourseFlag])
    return (
        // <div className="container" style={{ marginTop: "100px" }}>
        //     <div className="row justify-content-center mt-5">
        //         <div className="col-md-6">
        //             <form noValidate onSubmit={formHandler}>
        //                 <div className="form-group">
        //                     <label htmlFor="inputId">Бичлэг</label>
        //                     <input required className="form-control" type="file" accept="video/*" id="inputId" onChange={fileHandler} multiple={false} />
        //                 </div>
        //                 {/* <div className="form-group">
        //                 <label htmlFor="thumbnailId">Thumbnail</label>
        //                 <input required className="form-control" type="file" accept=".jpg,.png,.jpeg" id="thumbnailId" onChange={imageHandler}></input>
        //             </div> */}
        //                 <div className="form-group">
        //                     <label htmlFor="titleId">Гарчиг</label>
        //                     <input value={title} onChange={(e) => setTitle(e.target.value)} required type="text" className="form-control" id="titleId" />
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="categoryId">Төрөл</label>
        //                     <select value={category} onChange={(e) => setCategory(e.target.value)} className={classnames("form-control",
        //                         {
        //                             'is-invalid': error.year

        //                         })} id="categoryId">
        //                         <option>Select</option>
        //                         {categories.map((data, index) =>
        //                             <option key={index} value={data.value}>{data.label}</option>
        //                         )}
        //                     </select>
        //                     {error.category && (<div classNameName="invalid-feedback">{error.category}</div>)}
        //                 </div>
        //                 <div className="form-group ">
        //                     <label htmlFor="descriptionId">Тайлбар</label>
        //                     <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" />
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="priceId">Үнэ</label>
        //                     <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" />
        //                 </div>
        //                 <div class="row justify-content-center">
        //                     <div class="col-md-1">
        //                         {
        //                             isLoading && <div class="spinner-border text-primary" role="status">
        //                                 <span class="sr-only">Уншиж байна...</span>
        //                             </div>
        //                         }
        //                     </div>
        //                 </div>
        //                 {!isLoading && <button type="submit" className="btn btn-info">Оруулах</button>}
        //             </form>
        //         </div>
        //     </div>
        // </div>
        
        // FieldArray Form with formik
        // <Container>
        //     <h1>Add New Member</h1>
        //     <form>

        //     </form>
        // </Container>
        <Card>
            <CardContent>
                <Formik 
                  initialValues={{
                    courseName: '',
                    category: '',
                    desc: '',
                    price: 0,
                    videos: [emptyVideo]
                  }}
                  validationSchema={object({
                    courseName: string().required('Сургалтын нэр заавал оруулна уу.')
                                        .min(5, 'Хамгийн багадаа 5 тэмдэгт оруулна уу.')
                                        .max(50),
                    category: '',
                    desc: string().required().min(5).max(50),
                    price: number().required(),
                  })}
                  onSubmit={async (values) => {
                    console.log('my values', values);
                    // return new Promise(res => setTimeout(res, 25000));
                  }}>
                    {({ values, errors, isSubmitting }) => (
                        <Form autoComplete="off">
                            <h1>Сургалтын материал оруулах хэсэг</h1>
                            <Grid Container direction="column" spacing={2}>
                                <Grid item>
                                    <Field
                                        fullWidth
                                        name="courseName"
                                        component={TextField}
                                        label="Сургалтын нэр"
                                    />
                                </Grid>
                                <Grid item>
                                    <Field name="desc" component={TextField} label="Тайлбар"/>
                                </Grid>
                                <Grid item>
                                    <Field 
                                        fullWidth
                                        name="price" 
                                        type="number"
                                        component={TextField}
                                        label="Үнэ"
                                    />
                                </Grid>

                                <Grid item>
                                    <Button 
                                        fullWidth
                                        disabled={isSubmitting}
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        startIcon={isSubmitting ? <CircularProgress size="0.9rem"/> : undefined}
                                    >
                                        {isSubmitting ? 'Submitting' : 'Submit' }
                                    </Button>
                                </Grid>
{/* 
                                <Grid item>
                                  <Field
                                    name="termsAndConditions"
                                    type="checkbox"
                                    component={CheckboxWithLabel}
                                    Label={{
                                        label: 'I accept the terms and conditions',
                                        className: errors.termsAndConditions
                                            ? classnames.errorColor
                                            : undefined,
                                    }}
                                  />
                                </Grid> */}
                                
                                {/* Хичээлүүдийн бичлэг оруулах */}
                                <FieldArray name="videos">
                                  {({push, remove, move}) => (
                                    <React.Fragment>
                                      <Grid item>
                                        <Typography variant="body2">
                                            All your videos
                                        </Typography>
                                      </Grid>

                                      {values.videos.map((_, index) => (
                                        <Grid container item key={index} spacing={2}>
                                          {/* Нэр */}
                                          <Grid item xs={12} sm="auto" className={classes.stretch}>
                                            <Field 
                                              fullWidth
                                              name={`videos[${index}].title`}
                                              component={TextField} label="Хичээлийн гарчиг"/>
                                          </Grid>

                                          {/* Бичлэг оруулах */}
                                          <Grid item xs={12}  sm="auto" className={classes.stretch}>
                                            <Field 
                                              fullWidth
                                              name={`videos[${index}].url`}
                                              component={TextField} label="Бичлэг оруулах"/>
                                          </Grid>

                                          <Grid item xs={12} sm="auto">
                                            <Button onClick={() => remove(index)}>Устгах</Button>
                                          </Grid>
                                        </Grid>
                                      ))}
                                    <Grid item>
                                      <Button onClick={() => push(emptyVideo)}>+</Button>
                                    </Grid>
                                    </React.Fragment>
                                  )}
                                </FieldArray>
                            </Grid>
                            <pre> {JSON.stringify({ values, errors }, null, 4)}</pre>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    )
}

export default UploadVideos
