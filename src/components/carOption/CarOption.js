export default function CarOption({car}) {
    return (
        <option value={JSON.stringify(car)}>
            {car.model} - {car.year} year
        </option>
    );
}