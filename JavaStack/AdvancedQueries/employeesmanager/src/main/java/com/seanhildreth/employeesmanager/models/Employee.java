package com.seanhildreth.employeesmanager.models;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 2, max = 64)
    private String first_name;
    @Size(min = 2, max = 64)
    private String last_name;
    @Column(updatable = false)
    private Date created_at;
    private Date updated_at;
    @OneToMany(mappedBy = "manager", fetch = FetchType.LAZY)
    private List<Employee> employees;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manager_id")
    private Employee manager;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    public void setManager(Employee manager) {
        this.manager = manager;
    }



    public List<Employee> getEmployees() { return this.employees; }

    public Employee getManager() { return this.manager; }



    @PrePersist
    protected void onCreate() { this.created_at = new Date(); }

    @PreUpdate
    protected void onUpdate() { this.updated_at = new Date(); }
}
