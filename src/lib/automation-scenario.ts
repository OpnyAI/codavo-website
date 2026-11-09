export const weeksPerYear = 48;

export const initialScenario = {
  team: 40,
  hours: 8,
  hourlyCost: 50,
  automation: 80,
  realized: 50,
  running: 20000,
  implementation: 30000,
  revenue: 10000000,
  margin: 8,
};

export function calculateAutomationScenario(scenario: typeof initialScenario) {
  const hoursNow = scenario.team * scenario.hours * weeksPerYear;
  const hoursFreed = hoursNow * scenario.automation / 100;
  const timeValue = hoursFreed * scenario.hourlyCost;
  const costReduction = timeValue * scenario.realized / 100 - scenario.running;
  const firstYearImpact = costReduction - scenario.implementation;
  const operatingCosts = scenario.revenue * (1 - scenario.margin / 100);
  const marginAfter = scenario.revenue > 0
    ? scenario.margin + firstYearImpact / scenario.revenue * 100
    : null;

  const operatingProfit = scenario.revenue * scenario.margin / 100;

  return { hoursNow, hoursFreed, timeValue, costReduction, firstYearImpact, operatingCosts, marginAfter, operatingProfit };
}
