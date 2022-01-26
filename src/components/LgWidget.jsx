import styled from "styled-components";

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15);
    padding: 20px;
    margin: 10px;
    border-radius: .8em;
`

const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
`

const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`
const TableHead = styled.thead``

const TableBody = styled.tbody``

const TableRow = styled.tr``

const TableHeader = styled.th`
    text-align: left;
`

const UserData = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`

const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
const Name = styled.span`font-weight: 600`
const Date = styled.td`font-weight: 300;`
const Amount = styled.td`font-weight: 300;`

const Status = styled.td``

const LgWidget = () => {
    const Button = ({type}) => {
        return <button className={"statButton " + type}>{type}</button>;
    }
    return (
        <Container>
        <Title>Recent Transactions:</Title>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Customer</TableHeader>
                    <TableHeader>Date</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Status</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <UserData>
                        <UserAvatar src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                        <Name>Mohammed Aziz</Name>
                    </UserData>
                    <Date>25 Jan 2022</Date>
                    <Amount>560 AED</Amount>
                    <Status>
                        <Button type="Approved"/>
                    </Status>
                </TableRow>

                <TableRow>
                <UserData>
                    <UserAvatar src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                    <Name>John Doe</Name>
                </UserData>
                <Date>25 Jan 2022</Date>
                <Amount>234 AED</Amount>
                <Status>
                    <Button type="Pending"/>
                </Status>
            </TableRow>

            <TableRow>
                <UserData>
                    <UserAvatar src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                    <Name>Lorem Porem</Name>
                </UserData>
                <Date>25 Jan 2022</Date>
                <Amount>240 AED</Amount>
                <Status>
                    <Button type="Declined"/>
                </Status>
            </TableRow>
            </TableBody>
        </Table>
    </Container>
    );
};

export default LgWidget;
