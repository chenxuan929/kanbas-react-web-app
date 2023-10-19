function FindIndex() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    const numberGraterThan2 = numberArray1.filter((a) => a > 2);
    const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
    const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

    return (
        <div>
            <h4>Find Index</h4>
            fourIndex = {fourIndex} <br />
            string3Index = {string3Index} <br />
            numberGraterThan2 = {numberGraterThan2} <br />
            oddNumbers = {oddNumbers} <br />
            evenNumbers = {evenNumbers}
        </div>
    );
}

export default FindIndex;