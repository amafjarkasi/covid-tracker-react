import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form, Button, Card, Spinner, Table } from "react-bootstrap";
import { Statistic, Label, Flag } from "semantic-ui-react";
import { CountUp } from "use-count-up";

const internationalNumberFormat = new Intl.NumberFormat("en-US");
const percentageNumberFormat = Intl.NumberFormat("en-US", {
	style: "percent",
	minimumFractionDigits: 1,
	maximumFractionDigits: 2
});

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [getData, setData] = useState(null);

	useEffect(() => {
		const loadCountryData = () => {
			actions.fetchCountryData();
		};
		loadCountryData();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>
				{isNaN(store.country_data.population) == false ? (
					"USA" + " COVID-19 Statistics"
				) : (
					<Spinner animation="border" variant="primary" />
				)}
			</h1>

			<Statistic color="red">
				<Statistic.Value>
					{isNaN(store.country_data.population) == false ? (
						<CountUp isCounting duration={3} end={store.country_data.population} shouldUseToLocaleString />
					) : (
						""
					)}
				</Statistic.Value>
				<Statistic.Label>Population</Statistic.Label>
			</Statistic>
			<p className="pt-3">
				{store.country_data.lastUpdatedDate != undefined
					? "Last updated: " + store.country_data.lastUpdatedDate
					: ""}
			</p>
			<div className="container-fluid w-75 pt-3">
				<Table striped bordered hover size="md" responsive="md">
					<thead>
						<tr>
							<th>
								<Label color="red" horizontal>
									Metric
								</Label>
							</th>
							<th>
								<Label color="red" horizontal>
									Change
								</Label>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Test positivity rate</td>
							<td>
								{isNaN(store.country_metrics.testPositivityRatio) == false ? (
									percentageNumberFormat.format(store.country_metrics.testPositivityRatio)
								) : (
									<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
								)}
							</td>
						</tr>
						<tr>
							<td>Case density/per 100k population</td>
							<td>
								{isNaN(store.country_metrics.caseDensity) == false ? (
									(store.country_metrics.caseDensity * 1).toFixed(2) + "/persons"
								) : (
									<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
								)}
							</td>
						</tr>
						<tr>
							<td>Infection rate</td>
							<td>
								{isNaN(store.country_metrics.infectionRate) == false ? (
									(store.country_metrics.infectionRate * 1).toFixed(2)
								) : (
									<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
								)}
							</td>
						</tr>
						<tr>
							<td>
								Infection rate 90
								<sup>th</sup> percentile
							</td>
							<td>
								{isNaN(store.country_metrics.infectionRateCI90) == false ? (
									(store.country_metrics.infectionRateCI90 * 1).toFixed(2)
								) : (
									<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
								)}
							</td>
						</tr>
						<tr>
							<td>ICU capacity ratio</td>
							<td>
								{isNaN(store.country_metrics.icuCapacityRatio) == false ? (
									percentageNumberFormat.format(store.country_metrics.icuCapacityRatio)
								) : (
									<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
								)}
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
