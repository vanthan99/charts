import { NextPage } from "next";
import { Bar } from "react-chartjs-2";
import { Col, Container, Row } from "reactstrap";
import CrazyChart from "../../components/CrazyChart";
import DoughnutChart from "../../components/DoughnutChart";
import DynamicBarChart from "../../components/DynamicBarChart";
import GroupedBarChart from "../../components/GroupedBarChart";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import LineChart from "../../components/LineChart";
import MultiAxisLineChart from "../../components/MultiAxisLineChart";
import MultiAxisLine from "../../components/MultiAxisLineChart";
import MultiTypeChart from "../../components/MultiTypeChart";
import PieChart from "../../components/PieChart";
import PolarChart from "../../components/PolarAreaChart";
import RadarChart from "../../components/RadarChart";
import ScatterChart from "../../components/ScatterChart";
import StackedBarChar from "../../components/StackedBarChart";
import VerticalBarChart from "../../components/VerticalBarChart";


const index: NextPage = () => {
    return <Container>
        <Row>
            <Col sm={6}>
                <VerticalBarChart />
            </Col>
            <Col sm={6}>
                <HorizontalBarChart />
            </Col>
            <Col sm={6}>
                <GroupedBarChart />
            </Col>
            <Col sm={6}>
                <StackedBarChar />
            </Col>
            <Col sm={6}>
                <LineChart />
            </Col>
            
            <Col sm={6}>
                <MultiAxisLineChart />
            </Col>
            
            <Col sm={6}>
                <ScatterChart />
            </Col>
            <Col sm={6}>
                <DoughnutChart />
            </Col>
            <Col sm={6}>
                <PieChart/>
            </Col>
            <Col sm={6}>
                <PolarChart />
            </Col>
            <Col sm={6}>
                <RadarChart/>
            </Col>
            <Col sm={6}>
                <DynamicBarChart />
            </Col>
            <Col sm={6}>
                <MultiTypeChart />
            </Col>
            <Col sm={6}>
                <CrazyChart />
            </Col>
        </Row>
        
    </Container>
}

export default index;