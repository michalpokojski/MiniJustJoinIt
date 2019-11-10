import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { getJobOfferById } from 'selectors/offers'
import useFetchOffers from 'hooks/useFetchOffers'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Skills from 'components/Skills'
import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(2)
  },
  jobOfferWrapper: {
    padding: theme.spacing(2)
  },
  jobOfferTitle: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between'
  },
  jobOfferBody: {
    margin: theme.spacing(3, 0)
  },
  jobOfferMiscellaneous: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexFlow: 'column nowrap',
    '& > *': {
      padding: theme.spacing(1, 0, 1, 0)
    }
  },
  jobOfferFooter: {
    display: 'flex',
    justifyContent: 'center'
  },
  employmentType: {
    textTransform: 'uppercase'
  },
  centered: {
    display: 'flex',
    alignItems: 'center'
  },
  notRemote: {
    color: 'red'
  },
  remote: {
    color: 'green'
  }
}))

const JobOfferDetailsScreen = () => {
  useFetchOffers()
  const match = useRouteMatch()
  const jobOffer = useSelector(state => getJobOfferById(state, match.params.offerId))
  const classes = useStyles()
  console.log(jobOffer)
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.jobOfferWrapper}>
        <div className={classes.jobOfferTitle}>
          <Avatar src={jobOffer.company_logo_url} />
          <Typography variant='h4'>{jobOffer.title}</Typography>
          {jobOffer.salary_from && (
            <Typography className={classes.salary}>
              {jobOffer.salary_from} - {jobOffer.salary_to} {jobOffer.salary_currency}
            </Typography>
          )}
        </div>
        <div className={classes.jobOfferBody}>
          <div className={classes.jobOfferMiscellaneous}>
            <div className={classes.centered}>
              <Typography>
                Required skills:
              </Typography>
              <Skills skills={jobOffer.skills} offerId={jobOffer.id} fullSkill />
            </div>
            <Typography className={classes.employmentType}>
              Employment type: {jobOffer.employment_type || 'N/A'}
            </Typography>
            <div className={classes.centered}>
              <Typography>
                Remote work:
              </Typography>
              {jobOffer.remote ? <Check className={classes.remote} /> : <Close className={classes.notRemote} />}
            </div>
            <Typography>Company: {jobOffer.company_name || 'N/A'}</Typography>
            <Typography>Company size: {jobOffer.company_size || 'N/A'}</Typography>
          </div>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis distinctio doloribus error odio provident rerum, vitae voluptate. Ex id illo itaque nihil quisquam. Ad esse expedita ratione ullam! A ad error fuga mollitia omnis, quam vel voluptas! Commodi consequatur eius optio rerum vitae! Ab accusamus commodi consectetur enim harum inventore nihil optio sint sit voluptatibus. Aliquam iste maiores quod repellat! A aliquam aliquid commodi corporis cupiditate et exercitationem illum natus nemo odit omnis optio, pariatur quae quaerat qui quisquam quos ratione rem repudiandae sint soluta tempora unde! Amet deserunt dolore eaque error exercitationem nihil odit possimus. Aut corporis delectus distinctio doloremque doloribus maiores molestias nisi nobis nostrum, officia, praesentium quaerat voluptas. Ad, assumenda culpa cupiditate deleniti ducimus eaque eligendi impedit incidunt magni nemo, nesciunt nostrum obcaecati quaerat reiciendis rem sapiente sed sit tempore totam ut. Accusamus adipisci, asperiores aspernatur consequatur corporis delectus deleniti dolorum eligendi harum illo ipsam ipsum molestias nisi nostrum officia quas quod sapiente tempora totam ullam ut vel velit? Aliquid at blanditiis consequatur dolorem eaque eius fugiat fugit libero nam nobis non nulla numquam obcaecati possimus quasi quis quisquam quo, quos reiciendis sed, sequi soluta sunt tempore totam voluptatibus! Aperiam deserunt doloribus eaque, eligendi eum, exercitationem explicabo, hic incidunt ipsa maiores minima nemo nisi pariatur quis quod repellat repellendus similique. Aut cumque expedita nam quam quod. Amet, at blanditiis consequuntur corporis culpa dicta dolores eius error et eum, exercitationem itaque iure, praesentium quod recusandae reprehenderit tenetur veniam voluptatibus. Commodi eius explicabo praesentium voluptatem voluptates. Beatae, cupiditate?</Typography>
        </div>
        <div className={classes.jobOfferFooter}>
          <Button variant='contained'>Apply</Button>
        </div>
      </Paper>
    </div>
  )
}

export default JobOfferDetailsScreen
