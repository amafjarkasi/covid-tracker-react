import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Spinner, Table, ProgressBar } from "react-bootstrap";
import { Statistic, Label, Card } from "semantic-ui-react";
import { CountUp } from "use-count-up";

const internationalNumberFormat = new Intl.NumberFormat("en-US");
const percentageNumberFormat = Intl.NumberFormat("en-US", {
	style: "percent",
	minimumFractionDigits: 0,
	maximumFractionDigits: 0
});

export const VacStats = () => {
	const { store, actions } = useContext(Context);
	const initpercentage = percentageNumberFormat.format(store.country_metrics.vaccinationsInitiatedRatio);
	const comppercentage = percentageNumberFormat.format(store.country_metrics.vaccinationsCompletedRatio);

	const items = [
		{
			header: "Vaccinations Initiated",
			description: "Indicates number of people vaccinated with the first dose.",
			meta: `${internationalNumberFormat.format(store.country_actuals.vaccinationsInitiated)}`
		},
		{
			header: "Vaccinations Completed",
			description: "Indicates number of people vaccinated with both the first and second dose.",
			meta: `${internationalNumberFormat.format(store.country_actuals.vaccinationsCompleted)}`
		},
		{
			header: "Vaccinations Administered",
			description: "Total number of vaccine doses administered in general.",
			meta: `${internationalNumberFormat.format(store.country_actuals.vaccinesAdministered)}`
		}
	];

	useEffect(() => {
		const loadCountryData = () => {
			actions.fetchCountryData();
		};
		!store.data_stored && loadCountryData();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>
				{isNaN(store.country_actuals.vaccinesDistributed) == false ? (
					"USA" + " COVID-19 - Vaccination Statistics"
				) : (
					<Spinner animation="border" variant="primary" />
				)}
			</h1>

			<Statistic color="red">
				<Statistic.Value>
					{isNaN(store.country_actuals.vaccinesDistributed) == false ? (
						<CountUp
							isCounting
							duration={2}
							end={store.country_actuals.vaccinesDistributed}
							shouldUseToLocaleString
						/>
					) : (
						""
					)}
				</Statistic.Value>
				<Statistic.Label>Distributed Doses</Statistic.Label>
			</Statistic>
			<div className="container-fluid w-50 py-5">
				<p>Vaccinations Initiated:</p>
				{isNaN(store.country_metrics.vaccinationsInitiatedRatio) == false ? (
					<ProgressBar
						now={store.country_metrics.vaccinationsInitiatedRatio * 100}
						label={`${initpercentage}`}
						variant="danger"
					/>
				) : (
					<Spinner animation="border" variant="primary" />
				)}
				<br />
				<br />
				<p>Vaccinations Completed:</p>
				{isNaN(store.country_metrics.vaccinationsCompletedRatio) == false ? (
					<ProgressBar
						now={store.country_metrics.vaccinationsCompletedRatio * 100}
						label={`${comppercentage}`}
						variant="warning"
					/>
				) : (
					<Spinner animation="border" variant="primary" />
				)}
			</div>
			<div className="container-fluid w-100 pt-5">
				{isNaN(store.country_actuals.vaccinationsInitiated) == false ? (
					<Card.Group centered items={items} />
				) : (
					<Spinner animation="border" variant="primary" />
				)}
			</div>
		</div>
	);
};
