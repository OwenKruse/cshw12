import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Grid, Card, CardContent, CardMedia, Typography, Avatar} from "@mui/material";
import {Paper, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import useSWR from 'swr';
import {useMediaQuery} from "@mantine/hooks";
import SoccerPic from '../public/Soccer/contentrotator636602614601069619.png';
import TravelPic1 from '../public/Travel/IMG_1799.jpg';
import TravelPic2 from '../public/Travel/IMG_2413.jpg';
import TravelPic3 from '../public/Travel/IMG_1823.jpg';
import CodingPic from '../public/canva-photo-editor-8-7.jpg';
import ChessPic from '../public/chess-4.jpg';
import { useRouter } from "next/router";

import ImageFader from '../comps/ImageFader';




export default function Home() {
        // Replace this array with your own list of projects
        const projects = [
            {      title: 'Clash Royale Build-A-Bot',      image: 'https://raw.githubusercontent.com/wiki/Pbatch/ClashRoyaleBuildABot/images/demo.jpg',      description: 'A project for building rule-based clash royale bots. Using YoloV5 to build a state of the game and gather information about the current state.', link: 'https://github.com/Pbatch/ClashRoyaleBuildABot'   },
            {      title: 'TwitterAutoReplyBot',      image: '/path/to/project2.jpg',      description: 'Python script that replies to specified number of tweets containing a specified hashtag.\n' +
                    '\n' +
                    'This Twitter bot uses Tweepy, a Python module to deal with the Twitter API.', link: 'https://github.com/OwenKruse/TwitterReply'   },
            {      title: 'Real Relative Strength Trading Bot',      image: '/path/to/project3.jpg',      description: 'A trading bot that uses relative strength to determine entries and exits. Utilizes technical analysis to analyze the relative strength of various assets in the market. ',  link: 'https://github.com/OwenKruse/OwensRRSTradeBot'  },  ];

        // Replace this object with your own author information
        const author = {
            name: 'Owen Kruse',
            avatar: '/91492770.jpg',
            bio: 'I am a computer science student with a passion for learning and creating. I am currently a student at Western Washington University.\n',
        };

        const Soccer = {      title: 'Soccer', image : ['/public/soccer/contentrotator636602614601069619.png'], description: "I have played soccer since I was in first grade. Soccer has taught me about what it means to be a team and to have people to rely on."}
        const Coding = {      title: 'Coding', image : ['/public/coding/programming.jpg'], description: "I have been coding since I was in 6th grade. I have learned many different languages and have been able to create many different projects."}
        const travel = {      title: 'Travel', image : ['/public/soccer/contentrotator636602614601069619.png'], description: "I love to travel. I have been to many different places around the world and have learned a lot about different cultures."}
        const Chess = {      title: 'Chess', image : ['/public/soccer/contentrotator636602614601069619.png'], description: "I have been recently started playing chess. I have learned a lot about strategy and how to think ahead. I have also learned how to be patient and not rush."}
    const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotify', fetcher);
    const mobile = useMediaQuery(`(max-width: 600px)`);
    const router = useRouter();
    console.log(data);
    const handlePlay = () => {
        if (data?.isPlaying) {
            return (
                <Card className={styles.musicCard}>
                    <CardContent className={styles.logoCardContent}>
                    <img src={data?.albumImageUrl} alt={"Spotify Logo"} className={styles.albumImage}/>
                    </CardContent>
                    <CardContent className={styles.musicCardContent}>
                        <Typography variant="body1" component="h2">
                            {data?.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {data?.artist}
                        </Typography>
                    </CardContent>
                </Card>
            );
        } else {
            return (
                <Card className={styles.musicCard}>
                    <CardContent className={styles.logoCardContent}>
                        <Image src={"/Spotify-logo.png"} alt={"Spotify Logo"} width={75} height={50}/>
                    </CardContent>
                    <CardContent className={styles.musicCardContent}>
                        <Typography variant="body1" component="h2">
                            {"Not Playing"}
                        </Typography>
                    </CardContent>
                </Card>
            );
        }
    };

        return (
            <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.author}>
                    <Grid item className={styles.avatarGrid}>
                    <Avatar
                        alt={author.name}
                        src={author.avatar}
                        className={styles.avatar}
                    />
                        {handlePlay()}
                    </Grid>
                    <Typography sx={
                        {
                            fontWeight: 600,
                        }
                    } variant="h4">{author.name}</Typography>
                    <Typography sx={
                        {
                            fontWeight: 400,
                            color:"rgba(255,255,255,0.63)",
                            width: "80%",
                        }
                    } variant="body1">{author.bio}</Typography>
                </div>
                <Typography sx={
                    {
                        fontWeight: 600,
                        color:"rgb(255,255,255)",
                        width: "80%",
                        textAlign: "center",
                    }
                } variant="h4">Interests</Typography>
                <div className={styles.interests}>
                <Grid container spacing={2} className={styles.aboutMeGrid}>
                    <Carousel sx={{ maxWidth: 900 }} mx="auto" withIndicators height={600} slideSize={mobile ? "100%" : "33.33%"} slideGap="md" loop>
                        <Carousel.Slide>
                        <Paper sx={{ padding: 10,  background: '#393E46'}}>
                            <Typography sx={{ color: 'white', textAlign: 'center', fontWeight: '400' }} variant="h5">
                                {Soccer.title}
                            </Typography>
                            <Image src={SoccerPic} alt={"Soccer"} width={500} className={styles.image}/>
                            <Text sx={{ color: 'white' }}>I have been playing Soccer since I was in Elementary School. Not only did it teach me valuable teamwork and communication skills, but it also helped me develop discipline and perseverance.  </Text>
                        </Paper>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Paper sx={{ padding: 10,  background: '#393E46' }}>
                                <Typography sx={{ color: 'white', textAlign: 'center', fontWeight: '400' }} variant="h5">
                                    {travel.title}
                                </Typography>
                                <ImageFader
                                    images={[    TravelPic1,    TravelPic2,    TravelPic3,  ]}
                                    interval={3000}
                                />
                                <Text sx={{ color: 'white' }}>I love to travel. I have been to many different places around the world and have learned a lot about different cultures. </Text>

                            </Paper>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Paper sx={{ padding: 10,  background: '#393E46' }}>
                                <Typography sx={{ color: 'white', textAlign: 'center', fontWeight: '400' }} variant="h5">
                                    {Coding.title}
                                </Typography>
                                <Image src={CodingPic} alt={"Coding"} width={500} className={styles.image} height={300}/>
                                <Text sx={{ color: 'white' }}>I have been coding since I was in 6th grade. I have learned many different languages and have been able to create many different projects. </Text>
                            </Paper>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Paper sx={{ padding: 10,  background: '#393E46' }}>
                                <Typography sx={{ color: 'white', textAlign: 'center', fontWeight: '400' }} variant="h5">
                                    {Chess.title}
                                </Typography>
                                <Image src={ChessPic} alt={"Chess"} width={500} className={styles.image} height={300}/>
                                <Text sx={{ color: 'white' }}>I have been recently started playing chess. I have learned a lot about strategy and how to think ahead. I have also learned how to be patient and not rush. </Text>
                            </Paper>
                        </Carousel.Slide>

                    </Carousel>

                </Grid>
                </div>
                <Typography sx={

                    {
                        fontWeight: 600,
                        color:"rgb(255,255,255)",
                        width: "80%",
                        textAlign: "center",
                    }
                } variant="h4">Projects</Typography>
                <Grid container spacing={4}>

                    {projects.map((project) => (
                        <Grid item key={project.title} xs={12} sm={6} md={4}  onClick={router.push ? () => router.push(project.link) : undefined}>
                            <Card className={styles.card} sx={
                                {
                                    cursor: 'pointer'
                                }
                            }>
                                <CardMedia
                                    className={styles.cardMedia}
                                    image={project.image}
                                    title={project.title}
                                />
                                <CardContent className={styles.projectCardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography className={styles.projectCardContentDescription}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
        );
}
