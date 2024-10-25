const { describe, expect, it, beforeEach, jest } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");

describe("scooter.rent(user)", () => {
  let scooter;
  let user;

  beforeEach(() => {
    scooter = new Scooter("Station A");
    user = {name: "Leo Sefton", id: 1};
  });
  it.skip("checks a scooter out to a user", () => {
    // Arrange
    scooter.charge = 70;
    scooter.isBroken = false;
    // Act
    scooter.rent(user)
    // Assert
    expect(scooter.station).toBeNull();
    expect(scooter.user).toBe(user);
  });

  it.skip("throws an error if battery dead or scooter broken", () => {
    //for low charge
    scooter.charge =  10;
    expect(() => scooter.rent(user)).toThrowError("scooter charging required");
    // for when scooter is broken
    scooter.charge = 50;
    scooter.isBroken = true;
    expect(() => scooter.rent(user)).toThrowError("scooter needs repairing");
  });
});

describe("scooter.dock(station)", () => {
  it.skip("returns a scooter to a station", () => {
    // Arrange
    const scooter = new Scooter("Station A");
    const user = {name: "Leo Sefton", id: 1};
    scooter.charge = 60;
    scooter.isBroken = false;
    scooter.rent(user);
    // Act
    scooter.dock("Station B");
    // Assert
    expect(() => scooter.station(user)).toBe("Station B");
    expect(scooter.user).toBeNull();
  });
});

describe("scooter.charge()", () => {
  it.skip("charges a scooter", () => {
    // Arrange
    const scooter = new Scooter("Station A");
    scooter.charge =40;
    jest.useFakeTimers();
    // Act
    scooter.recharge;
    jest.advanceTimersByTime(1000);
    // Assert
    expect(scooter.charge).toBeGreaterThan(40);

    //to check make sure scooter charges to 100%
    jest.advanceTimersByTime(50000);
    expect(scooter.charge).toBe(100);

    //reset to real time
    jest.useRealTimers;
  });
});

describe("scooter.repair()", () => {
  it.skip("repairs a scooter", () => {
    // Arrange
    const scooter = new Scooter("Station A");
    scooter.isBroken = true;
    jest.useFakeTimers();
    // Act
    scooter.requestRepair();
    jest.advanceTimersByTime(5000); //5 seconds of time
    // Assert
    expect(scooter.isBroken).toBe(false);
    jest.useRealTimers();
  });
});
