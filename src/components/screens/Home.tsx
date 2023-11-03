import { FC, useEffect, useState } from "react";
import Container from "../containers/container/Container";
import { Box, Flex, Grid, Image } from "@mantine/core";
import StepperNav from "../ui/Stepper/StepperNav";
import PageLayout from "../containers/pages/PageLayout";
import { pages } from "@/constants/pages";
import { usePageTurning } from "@/hooks/usePageTurning";
import Thanks from "../containers/pages/thanks/Thanks";

const Home: FC = () => {


  const { active, handleChangePage } = usePageTurning();
  const [windowWidth, setWindowWidth] = useState<number>(2000);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <Flex mih={"100vh"} align="center" justify="center" bg={'var(--Magnolia)'}>
      <Container bg={'var(--White)'} p={15} m={20}>
        <form >
          <Grid>
            <Grid.Col w={windowWidth <= 985 ? '100% ' : 'auto'} span={"content"} style={{ position: 'relative' }}>
              <Image
                w={'100%'}
                h={windowWidth <= 500 ? '90px' : windowWidth <= 985 ? '150px' : '100%'}
                src={windowWidth <= 985 ? "/bg-sidebar-mobile.svg" : "/bg-sidebar-desktop.svg"}
                radius={'var(--border-radius)'}
              />
              <Box p={windowWidth <= 500 ? '1rem ': '3rem'} pos={'absolute'} inset={0}>
                <StepperNav windowWidth={windowWidth} active={active} />
              </Box>
            </Grid.Col>
            <Grid.Col span="auto">
              {active >= 4 ? <Thanks /> :
                <PageLayout windowWidth={windowWidth} handleChangePage={handleChangePage} number={active} Component={pages[active].Component} title={pages[active].title} description={pages[active].description} />
              }
            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </Flex>
  )
}

export default Home
